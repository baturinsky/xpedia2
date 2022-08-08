import JSZip from "jszip";
import lzs from "lz-string";
import { defaultLanguage } from "./Ruleset";
import { readYaml, dirByHttp, parseYaml } from "./util";

async function loadPackedZip(text: string) {
  text = text.trim();
  let jszip = new JSZip();

  if (text.substr(0, 6) == "base64") {
    text = text.substr(6);
    let strData = atob(text);
    let data = await jszip.loadAsync(strData);
    let file = data.file("main");
    text = await file.async("string");
  }

  let data = parsePackedYaml(text);
  return data;
}

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

export function loadPacked() {
  let packed = window["xpedia"];
  if (packed != null) {
    let json = lzs.decompressFromBase64(packed)
    let data = JSON.parse(json);
    return data;
  }
}

export async function loadByHttp() {
  let [options, modDirs, xpediaDirs]: [OXCOptions, string[], string[]] =
    await Promise.all([
      readYaml(`${OXCPath}user/options.cfg`),
      dirByHttp(`${OXCPath}user/mods/`, true),
      dirByHttp(`${PediaPath}mods/`, true)
    ])

  modDirs = [`${OXCPath}standard/xcom1/`, ...modDirs]
  let allModDirs = [...modDirs, ...xpediaDirs]
  let modMetadataById = {};
  let modMetadata = await Promise.all(allModDirs.map(dir => readYaml(`${dir}/metadata.yml`)))
  for (let i in modMetadata) {
    let data = modMetadata[i];
    let dir = allModDirs[i];
    modMetadataById[data.id] = { ...data, dir };
  }

  let activeMods: string[] = ["xcom1", ...options.mods.filter(m => m.active).map(m => m.id)];

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

  return { ruls, langs }
}

async function loadLanguagesFromDirs(dirs: string[]) {

  let langFiles = await Promise.all(dirs.map(path => dirByHttp(path)));
  let files: { lname: string, dir: string }[] =
    langFiles.map(
      (list, dirInd) => list.filter(file => file.substr(file.length - 4) == ".yml")
      .map(lname => ({ lname:lname.substr(0,lname.length - 4), dir: dirs[dirInd] }))
    ).flat();
  //debugger;

  let lnames = [...new Set([...files.map(f=>f.lname),defaultLanguage,"icon"])];

  
  let lng = {};
  //let files: { lname: string, dir: string }[] = lnames.map(lname => dirs.map(dir => ({ lname, dir }))).flat(1);

  let data = await Promise.all(files.map(f => {
    let path = `${f.dir}${f.lname}.yml`;
    return readYaml(path)
  }))
  for (let file of data) {
    if (typeof file == "object") {
      let lname = Object.keys(file)[0]
      lng[lname] = { ...(lng[lname] || {}), ...file[lname] }
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
  let dirLists = await Promise.all(mods.map(mod => dirByHttp(mod.rulDir)));
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