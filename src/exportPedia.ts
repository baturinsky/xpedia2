import { defaultLanguage, rul } from "./Ruleset";
import { readStyle, packZip } from "./load";

export async function exportPedia(onlyCurrentLanguage = false) {
  document.body.style.cursor = "wait";
  let jsPath = (document.getElementById("xpedia-js") as HTMLScriptElement)?.src;
  let js = await (await fetch(jsPath)).text();
  let style = await readStyle("main-css");
  let lightStyle = await readStyle("light-css");

  let src = rul.src;

  if (onlyCurrentLanguage) {
    let langs = {} as any;
    langs[defaultLanguage] = src.langs[defaultLanguage];
    langs.icon = src.langs.icon;
    let langName = rul.langName;
    if (langName != defaultLanguage) {
      langs[langName] = src.langs[langName];
    }
    src = { ...src, langs };
  }

  //let packed = lzs.compressToBase64(JSON.stringify(rul.src))
  let packed = await packZip(JSON.stringify(src));

  //debugger;
  let html = `
<head>
  <meta name="description" content="Online reference for OpenXCom games" />
  <style id="main-css">${style}</style>
  <style id="light-css" media="none">${lightStyle}</style>
  <script>
  window.gameDir = ".";
  window.xpediaDir = "xpedia2/";
  window.xpedia = "${packed}";
  window.GlobeMarkers = "${window["GlobeMarkers"]}"
  clog = (...args)=>{}
  </script>
  <script>${js}</script>
</head>`;

  download("xpedia.html", html);
  document.body.style.cursor = "default";
}

//For possible app implementations
declare const
  fsSave: (name: string, data: string) => string
  ;

export function download(filename, text) {
  if (typeof fsSave != "undefined") {
    fsSave(filename, text)
    return
  }
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

