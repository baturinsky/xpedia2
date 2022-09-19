import JSZip from "jszip";
//import lzs from "lz-string";
import { readYaml, listDir, parseYaml, delay, readTextFile } from "./util";
import { inform, loadingFile } from "./store";
import { download, fetchText } from "./util";
import { defaultLanguage, rul } from "./Ruleset";

declare const
  fsData: (path:string)=>string
;

export async function unpackZip(text) {
  let jszip = new JSZip();
  let data = await jszip.loadAsync(text, { base64: true });
  let file = data.file("main");
  text = await file.async("string");
  return text;
}

export async function packZip(text) {
  let jszip = new JSZip();
  jszip.file("main", text)
  let file = jszip.generateAsync({
    type: "base64", 
    compression: "DEFLATE",
    compressionOptions: {
      level: 6
    }
  })
  return file;
}

/*async function testzip(){
  let p = await packZip("hello 443")
  console.log("zip", p, await unpackZip(p));  
}

testzip();*/

function parsePackedYaml(text: string) {
  let rul: any = {};
  let data = [];
  let reg = /^FILE: (.+)\n/gm;
  let matches: RegExpExecArray[] = [];
  let match: RegExpExecArray;
  while ((match = reg.exec(text))) matches.push(match);

  for (let i = 0; i < matches.length; i++) {
    let filename = matches[i][1];

    let file: string;
    if (i < matches.length - 1) {
      file = text.substr(
        matches[i].index + 7 + filename.length,
        matches[i + 1].index - matches[i].index - 7 - filename.length
      );
    } else file = text.substr(matches[i].index + 7 + filename.length);

    if (file.substr(1, 3) == "п»ї") file = file.substr(4);

    if (filename.substr(0, 5) == "TEXT@") {
      rul.lang[filename.substr(5)] = file;
      continue;
    }

    let parsed;

    if (filename.substr(0, 5) == "JSON@") {
      parsed = JSON.parse(file);
      filename = filename.substr(5);
    } else {
      try {
        parsed = parseYaml(file, filename);
      } catch (e) {
        console.log(e.message);
      }
    }

    if (filename == "xpedia") {
      rul.config = parsed;
      rul.modName = parsed.mod_name;
      continue;
    }

    if (parsed) data.push(parsed);
  }

  return { ...rul, data };
}

type OXCOptions = { mods: { active: boolean, id: string }[], options: any };

const OXCPath = "/", PediaPath = "";

export async function loadPacked() {
  let packed = window["xpedia"];
  if (packed != null) {
    //let json = lzs.decompressFromBase64(packed)
    let json = await unpackZip(packed);
    let data = JSON.parse(json);
    return data;
  }
}

export async function loadFromFiles() {
  let [options, modDirs, xpediaDirs]: [OXCOptions, string[], string[]] =
    await Promise.all([
      readYaml(`${OXCPath}user/options.cfg`),
      listDir(`${OXCPath}user/mods/`, true),
      listDir(`${PediaPath}mods/`, true)
    ])
  

  modDirs = [`${OXCPath}standard/xcom1/`, ...modDirs]
  let allModDirs = [...modDirs, ...xpediaDirs]
  let modMetadataById = {};
  let modMetadata = await Promise.all(allModDirs.map(dir => readYaml(`${dir}metadata.yml`)))

  for (let i in modMetadata) {
    let data = modMetadata[i];
    if(data==null)
      continue;
    let dir = allModDirs[i];
    modMetadataById[data.id] = { ...data, dir };
  }

  let activeMods: string[] = ["xcom1", ...options.mods.filter(m => m.active).map(m => m.id)];

  modMetadata = modMetadata.filter(m=>activeMods.includes(m.id))
  
  let masterModIds = modMetadata.filter(m=>m.isMaster).map(m=>m.id);

  modMetadata = modMetadata.filter(m=>m.isMaster || masterModIds.includes(m.master))
  activeMods = modMetadata.map(m=>m.id)

  debugger;
  
  let xpediaMods = Object.keys(modMetadataById).filter(k => {
    let data = modMetadataById[k];
    return (data.master == null || activeMods.includes(data.master)) && xpediaDirs.includes(data.dir)
  });

  activeMods = [...activeMods, ...xpediaMods];

  let lname = options.options.language;

  let activeModsMetadata = activeMods.map(id => modMetadataById[id])
  for (let mod of activeModsMetadata)
    mod.rulDir = mod.id == "xcom1" ? mod.dir : `${mod.dir}Ruleset/`;

  let langDirs = activeModsMetadata.map(m => `${m.dir}Language/`);

  langDirs.splice(1, 0, "/standard/xcom1/Language/OXCE/");

  let [ruls, langs] = await Promise.all(
    [loadRulsFromMods(activeModsMetadata),
    loadLanguagesFromDirs(activeModsMetadata.map(m => `${m.dir}Language/`))]
  );
  
  return { ruls, langs, mods: activeModsMetadata }
}

const extRegexp = /^(.+)\.([0-9a-z\-]+)?$/i;

function splitName(name){
  let m = name.match(extRegexp);
  return m?{body:m[1],ext:m[2]}:{body:name,ext:""};
}



async function loadLanguagesFromDirs(dirs: string[]) {

  let langFiles = await Promise.all(dirs.map(path => listDir(path)));
  let files: { lname: string, dir: string }[] =
    langFiles.map(
      (list, dirInd) => list.filter(file => ["yml", "html", "txt"].includes(splitName(file).ext))
        .map(lname => ({ lname, dir: dirs[dirInd] }))
    ).flat();
  //debugger;

  let lng = {};
  //let files: { lname: string, dir: string }[] = lnames.map(lname => dirs.map(dir => ({ lname, dir }))).flat(1);


  let data = await Promise.all(files.map(f => {
    let path = `${f.dir}${f.lname}`;
    return splitName(f.lname).ext == "yml"?readYaml(path):readTextFile(path);
  }))

  for (let i in data) {
    let text = data[i];
    let fname = files[i].lname;
    if (typeof text == "object") {
      let lname =  Object.keys(text)[0]
      lng[lname] = { ...(lng[lname] || {}), ...text[lname] }
    } else {
      let split = splitName(fname);
      if(split.ext != "yml"){
        let split2 = splitName(split.body);
        lng[split2.ext] = lng[split2.ext] || {};
        lng[split2.ext][split2.body] = text;
      }
    }
  }

  /*for (let lname of lnames) {
    if (lname != defaultLanguage) {
      lng[lname] = { ...lng[defaultLanguage], ...lng[lname] }
    }
  }*/

  return lng;
}

async function loadRulsFromMods(mods: { id: string, rulDir: string, dir: string }[]) {
  let dirLists = await Promise.all(mods.map(mod => listDir(mod.rulDir)));
  dirLists = dirLists.map(files => files.filter(name => name.substr(-4) == ".rul"))
  let dirLists2: { mod: string, path: string }[][] = [];
  for (let i in mods) {
    dirLists2[i] = dirLists[i].map(name => ({ mod: mods[i].id, path: `${mods[i].rulDir}${name}`, modDir: mods[i].dir }))
  }
  let files = dirLists2.flat(1);
  let ruls = await Promise.all(files.map(async file => {
    let data = await readYaml(file.path);
    return { ...data, file }
  }))
  return ruls;
}

export function useCache(data) {
  return new Promise((done) => {
    let request = indexedDB.open("xpedia", 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      const store = db.createObjectStore("cache", { keyPath: "id" })
    }

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("cache", "readwrite");
      const store = transaction.objectStore("cache");

      if (data == "load"){
        const query = store.get(1);
        query.onsuccess = () => {
          let data = query.result?.data;          
          done(data?JSON.parse(data):null);
        };        
      } else {
        if(data == "wipe")
          store.delete(1);
        else
          store.put({ id: 1, data: JSON.stringify(data) });
        done([]);
      }

      transaction.oncomplete = () => {
        db.close();        
      }
    }
  })
}


export let packedData;

export async function loadRules(rul) {
  loadingFile.set("loading from js")
  let data = await loadPacked();
  if (data) {
    packedData = true;
    loadingFile.set("")
    await delay(10);
  } else {
    loadingFile.set("loading from cache")
    data = await useCache("load");
    if(!data){
      loadingFile.set("loading from local files")
      data = await loadFromFiles();
      useCache(data);
    }
  }

  inform("parsing")
  rul.load(data);
  await delay(10);
}

export async function loadData(path:string){
  if(typeof fsData != "undefined"){
    return fsData(path);
  } else {
    return path;
  }
}

export async function exportPedia(onlyCurrentLanguage = false) {
  document.body.style.cursor = "wait";
  let jsPath = (document.getElementById("xpedia-js") as HTMLScriptElement)?.src;
  let js = await (await fetch(jsPath)).text();
  let mainCSS = document.getElementById("main-css") as HTMLLinkElement;
  let style = mainCSS.href?(await (await fetch(mainCSS.href)).text()):mainCSS.innerHTML;  

  let src = rul.src;
  
  if(onlyCurrentLanguage){
    let langs = {} as any;
    langs[defaultLanguage] = src.langs[defaultLanguage];
    langs.icon = src.langs.icon;
    let langName = rul.langName;
    if(langName != defaultLanguage){
      langs[langName] = src.langs[langName];
    }
    src = {...src,langs};
  }

  //let packed = lzs.compressToBase64(JSON.stringify(rul.src))
  let packed = await packZip(JSON.stringify(src));

  //debugger;

  let html = `
<head>
  <style>${style}</style>
  <script>
  window.gameDir = ".";
  window.xpediaDir = "xpedia2/";
  window.xpedia = "${packed}";
  </script>
  <script>${js}</script>
</head>`;
    
  download("xpedia.html", html);
  document.body.style.cursor = "default";
}