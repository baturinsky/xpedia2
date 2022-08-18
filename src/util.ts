import JSYaml from "js-yaml";
import { identity } from "svelte/internal";
import { loadingFile } from "./store";

export async function fetchAll(files) {
  return Object.fromEntries(
    await Promise.all(
      Object.keys(files).map(async (path) => [
        path,
        await (await fetch(files[path])).text(),
      ])
    )
  );
}

export async function readTextFile(path: string) {
  let text: string;
  try {
    text = await (await fetch(path)).text();
    loadingFile.update(t => t + " " + path);
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

export function parseYaml(file: string, filename: string) {
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

const dirFilesRegex = /<\s*a[^>]*>(.*?)<\s*\/\s*a>/gi;

export async function dirByHttp(path, full = false) {
  let text = await readTextFile(path);
  let matches: string[], files: string[] = [];
  while (matches = dirFilesRegex.exec(text)) {
    if (matches[1] != "../" && matches[1].substring(0,4) != "http")
      files.push(full ? path + matches[1] : matches[1]);
  }
  return files;
}

export function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}


export async function fetchText(path){
  return (await fetch(path)).text()
}

export function delay(n:number){
  return new Promise(r=>setTimeout(r, n));
}

//export const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export function camelToUnderscore(key) {
  var result = key.replace( /([A-Z])/g, " $1" );
  return result.split(' ').join('_').toLowerCase();
}

export function getFlagEmoji(countryCode:string){
  return countryCode.toUpperCase()
  //return String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()));
}

export function singular(s:string){
  return s.replace(/(e?s)$/,"");
}

export function removeByValue<T>(arr:T[], item:T) {
  const ind = arr.indexOf(item);
  if (ind !== -1) {
    arr.splice(ind, 1);
    return true;
  }
  return false;
}

export function addIfNew<T>(arr:T[], item:T) {
  const ind = arr.indexOf(item);
  if (ind == -1)
    arr.push(item);
}

export function addAllIfNew<T>(arr:T[], items:T[]|T) {
  if(!Array.isArray(items)){
    addIfNew(arr,items)
    return;
  }
  if(items.length<3){
    for(let it of items)
      addIfNew(arr,it)
  } else {
    let set = new Set(arr);
    for(let it of items)    
      if(!set.has(it))
        arr.push(it);
  }
}


export function isAncestorOf(ancestor, descendant) {
  let n = descendant;
  while (n) {
    if (n === ancestor) {
      return true;
    } else {
      n = n.parentNode;
    }
  }
  return false;
}

export function capital(str:string){
  if(str == null)
    return;
  return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase()  
}
export function cullDoubles<T>(list:T[]){
  return [...new Set(list)] as T[];
}