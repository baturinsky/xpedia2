import JSYaml from "js-yaml";
import { warn, inform } from "./store";

//For possible app implementations
declare const
  fsFile: (path: string) => string,
  fsData: (path: string) => string,
  fsSave: (name: string, data: string) => string,
  fsDir: (path: string, always: boolean) => string[]
  ;

async function fetchAll(files) {
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
    text = await fetchText(path)
    inform(path);
  } catch (e) {
    console.error(e);
    warn(e);
    return null;
  }
  return text;
}

export async function fetchText(path) {
  if (typeof fsFile != "undefined")
    return fsFile(path);
  else
    return (await fetch(path)).text()
}


const dirFilesRegex = /<\s*a[^>]*>(.*?)<\s*\/\s*a>/gi;

export async function listDir(path, full = false) {
  if (typeof fsDir != "undefined") {
    let files = fsDir(path, full)
    return files;
  }
  let text = await readTextFile(path);
  let matches: string[], files: string[] = [];
  while (matches = dirFilesRegex.exec(text)) {
    let dir = matches[1];
    if (matches[0].indexOf("href=#") != -1 || dir.indexOf("<") != -1)
      continue;
    if (dir != "../" && dir.substring(0, 4) != "http")
      files.push(full ? path + dir : dir);
  }
  return files;
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
    warn(e.message);
  }
}


export function delay(n: number) {
  return new Promise(r => setTimeout(r, n));
}

//export const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

export function camelToUnderscore(key) {
  var result = key.replace(/([A-Z])/g, " $1");
  return result.split(' ').join('_').toLowerCase();
}

export function getFlagEmoji(countryCode: string) {
  return countryCode.toUpperCase()
  //return String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()));
}

export function singular(s: string) {
  return s.replace(/(e?s)$/, "");
}

export function removeByValue<T>(arr: T[], item: T) {
  const ind = arr.indexOf(item);
  if (ind !== -1) {
    arr.splice(ind, 1);
    return true;
  }
  return false;
}

export function addIfNew<T>(arr: T[], item: T) {
  const ind = arr.indexOf(item);
  if (ind == -1)
    arr.push(item);
}

export function addAllIfNew<T>(arr: T[], items: T[] | T) {
  if (!Array.isArray(items)) {
    addIfNew(arr, items)
    return;
  }
  if (items.length < 3) {
    for (let it of items)
      addIfNew(arr, it)
  } else {
    let set = new Set(arr);
    for (let it of items)
      if (!set.has(it))
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

export function capital(str: string) {
  if (str == null)
    return;
  return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase()
}
export function cullDoubles<T>(list: T[]) {
  return [...new Set(list)] as T[];
}

export function clamp(min: number, val: number, max: number) {
  return val < min ? min : val > max ? max : val;
}

export function unique(a: any[]) {
  return [...new Set(a)];
}


export function withoutKeys(o: Object, keys: string[]) {
  o = { ...o };
  for (let k of keys) {
    delete o[k];
  }
  return o;
}

export function allFieldValuesOf(objects: Object[], field: string) {
  let s = new Set();

  for (let o of objects) {
    if (o[field] != undefined)
      s.add(o[field]);
  }
  return [...s];
}

export function exclude<T>(a: T[], b: T[]) {
  let s = new Set(b);
  return a.filter(v => !s.has(v))
}

export function loadImage(path: string) {
  return new Promise<HTMLImageElement>((done, fail) => {
    const image = new Image();
    image.src = path;
    image.onload = () => {
      done(image);
    };
  })
}

export function createCanvas(w: number, h: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('2d');
  canvas.width = w;
  canvas.height = h;
  return [canvas, ctx]
}


export function imageToCanvas(image: HTMLImageElement) {
  let [canvas, context] = createCanvas(image.width, image.height);
  context.drawImage(image, 0, 0);
  return canvas;
}

export const getBase64StringFromDataURL = (dataURL) =>
  dataURL.replace('data:', '').replace(/^.+,/, '');


export function canvasToBase64(canvas: HTMLCanvasElement) {
  const dataURL = canvas.toDataURL();
  const base64 = getBase64StringFromDataURL(dataURL);
  return base64;
}

export async function pathToDataUrl(path: string) {
  let blob = await (await fetch(path)).blob();
  var reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise<string>(done => {
    reader.onloadend = function () {
      done(reader.result as string);
    }
  })
}

export function splitCanvas(canvas: HTMLCanvasElement) {
  let height = canvas.height;
  let partsNum = canvas.width / canvas.height;
  let parts: HTMLCanvasElement[] = [];
  for (let i = 0; i < partsNum; i++) {
    let [part, ctx] = createCanvas(height, height);
    ctx.drawImage(canvas, i * height, 0, height, height, 0, 0, height, height)
    parts.push(part)
  }
  return parts;
}

export const pngDataPrefix = "data:image/png;base64,";