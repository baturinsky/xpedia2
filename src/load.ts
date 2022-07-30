import JSYaml from "js-yaml";
import JSZip from "jszip";
const defaultLanguage = "en-US"
//let dirFilesRegex = /<a[^>]*?href=(["\'])?((?:.(?!\1|>))*.?)\1?/gi;
let dirFilesRegex = /<\s*a[^>]*>(.*?)<\s*\/\s*a>/gi;

export async function dirByHttp(path, full = false) {
  let text = await readTextFile(path);
  let matches: string[], files: string[] = [];
  while (matches = dirFilesRegex.exec(text)) {
    if (matches[1] != "../")
      files.push(full ? path + matches[1] : matches[1]);
  }
  return files;
}

export function loadMods(modNames = ["Piratez"]) {

}

export async function readTextFile(path: string) {
  let text: string;
  try {
    text = await (await fetch(path)).text();
  } catch (e) {
    console.error(e);
    return null;
  }
  return text;
}

export async function readYaml(path: string) {
  let text = await readTextFile(path);
  let parsed = parseYaml(text, path);
  return parsed as any;
}

function parseYaml(file: string, filename: string) {
  try {
    return JSYaml.load(file, {
      json: true,
      filename,
      onWarning: (e) => {
        console.error(e.message);
      }
    });
  } catch (e) {
    console.error(e.message);
  }
}

async function loadPacked(text: string) {
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

export async function loadByHttp() {
  let [options, modDirs, xpediaDirs]: [OXCOptions, string[], string[]] =
    await Promise.all([
      readYaml("/user/options.cfg"),
      dirByHttp("/user/mods/", true),
      dirByHttp("mods/", true)
    ])

  modDirs = ["/standard/xcom1/", ...modDirs]
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

  let lnames = [lname, "ru"];

  let langDirs = activeModsMetadata.map(m => `${m.dir}Language/`);
  langDirs.splice(1, 0, "/standard/xcom1/Language/OXCE/");

  let [ruls, langs] = await Promise.all(
    [loadRulsFromMods(activeModsMetadata),
    loadLanguagesFromDirs(lnames, activeModsMetadata.map(m => `${m.dir}Language/`))]
  );

  return { ruls, langs }
}

async function loadLanguagesFromDirs(lnames: string[], dirs: string[]) {
  if (lnames.indexOf(defaultLanguage) == -1)
    lnames.unshift(defaultLanguage);
  let lng = {};
  let files: { lname: string, dir: string }[] = lnames.map(lname => dirs.map(dir => ({ lname, dir }))).flat(1);
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
  for (let lname of lnames) {
    if (lname != defaultLanguage) {
      lng[lname] = { ...lng[defaultLanguage], ...lng[lname] }
    }
  }
  return lng;
}

async function loadRulsFromMods(mods: { id: string, rulDir: string }[]) {
  let dirLists = await Promise.all(mods.map(mod => dirByHttp(mod.rulDir)));
  dirLists = dirLists.map(files => files.filter(name => name.substr(-4) == ".rul"))
  let dirLists2: { mod: string, path: string }[][] = [];
  for (let i in mods) {
    dirLists2[i] = dirLists[i].map(name => ({ mod: mods[i].id, path: `${mods[i].rulDir}${name}` }))
  }
  let files = dirLists2.flat(1);
  let ruls = await Promise.all(files.map(async file => {
    let data = await readYaml(file.path);
    return { ...data, file }
  }))
  //console.log(ruls.map(r=>[r.file.path, r]));
  return ruls;
}