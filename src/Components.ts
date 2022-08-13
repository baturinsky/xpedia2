import { defaultLanguage, rul } from "./Ruleset";
import Link from "./Link.svelte";
import Tr from "./Tr.svelte";
import Subheader from "./Subheader.svelte";
import Intro from "./Intro.svelte";
import LinksPage from "./LinksPage.svelte";
import LinksList from "./LinksList.svelte";
import Value from "./Value.svelte";
import BaseServiceList from "./BaseServiceList.svelte"
import SpecialBonus from "./SpecialBonus.svelte";
import MainTable from "./MainTable.svelte";
import Illustration from "./Illustration.svelte";
import { fetchAll, download, fetchText } from "./util";
//import lzs from "lz-string";
import { packZip } from "./load";

export { Link, Intro, LinksPage, LinksList, Value, BaseServiceList, Tr, SpecialBonus, MainTable, Illustration, Subheader, rul };

export const tr = t => rul.tr(t)

export const divider = (i, {vertical, cols} = {vertical:false, cols:0}) => i == 0 ? "" : vertical ? "</br>" : `<span class='list-divider'>&nbsp·${i%(cols||1)?"&nbsp":" "}</span>`;

export const emptyImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAANSURBVBhXY/j//z8DAAj8Av6IXwbgAAAAAElFTkSuQmCC";
export const favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAMDAwMJCAgICAoKCg0NDQoTEQoTEgsUEg0XFQ0aGR4eHg0tKxMlIhUoJhgoKQ4zLw42LxUyLxcyLw45Mw45NRY0MBowMB81NxI9ORM/OBg+Ox8+OiEzMiE0NCA9PC89OjU2Nj09PRZDPRRFPR9BPBxEPSxCPxdEQRlFQhNLQhVKQxRMRBdPRR1MRh5ORx5VTiRKRCRKRihNSShOSDhHRDJIRTVLSDdOSjtKSD5KSiJVTClXTShVTzdTTSlXUCpWUSpXUCNbVCddVS9aUitfVyxcVz1SUDBYUiNhWStmXipuYThmYzdoYDdqYzl1az13bzV7ckVJSEBWUUNXU0hVVUBZV0JcWE9dXU5jW0pgXkZkYE1kYU1kYEZsZFBjYVBjYklwak51bUJ9dF91c1d4clt5dFp6dVt7dl55dF98eGBoaGZoaGhvbW1tbWdwb2J1b2Vyc2J6eWZ5eGN/e2h5eD2CeUGBd2aBfUiMgkOQg02Sh0qViU+ViUabi02Yjl6UjVabjVKfkWKFgGGLhX+AgH+KiWOakmick0ypm1WgklGhlFKpnFKrnlGwn1OvoFauoVWzpFaypVmwpFe8rlu5qW6xpmG8q2u5q265rX+2q1rBs17Jt1vLvF/NvVzPvGTDtmDHtmDIt2LIt2fJt2bLtmLGuGHHumXFuWbFumjHuW7FumHJuGHJuGPIuGDKuWPLuWPJu2DKumDKu2PKumLLumPLumPLu2XJuWXLuWXLu2TKumHNuWHNumDNu2PMu2TMu2XNu2HJvGPLvWLLvGPLvmXJvWXKvWbKvWfIvmHNvWHMvGHMvWLNvWLMvWPMvWPNvmfPvWnIumrJu2/Iu2jJvW7Lv2vMvWjOvGjNv2vNvm/MvW/Mv3LOv27QvmbPwG/RwnDSwnXSwX/Sx3rWyoePjYiMi4mSkJSXl5qfn6KlpIbDu4LEuYrIvYHSxIPTx4LUx47UyYrVzYPZyonYy5re08zMzMvQz9Hb2drf39rg39rh4N7k5ODj4uvs7AAAAOGYdbwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACCElEQVQ4T2P4TwCQpCA3pSIrPaMkPhvKBwOEAqvUt1/u3rp86fqjaXFQIRBAKGh4d2PnruPnzp08fnijClQMCOAKmj9snbf3zJnz5/fsurppiQRUFElBx61t+85DwZ6F0lBRJAVvNqzZD5U/f2qzF1QUpiAvL8jOxMPe3t7R0dHGwdbFRCYvLw8sA1XAyvD3lSIDEHAZqoIohp/c36BmwyilP79ZgBJG5ycBScZfzP9gdsPpl63fgVJHzh/hZWDIefEDJg5X8IwjmJOd/dKx8+d3sLNxhjBBhREK/ieuX75r8/lz589fmLd9QZ04VBRJwf8Z83dfOA9UcfzsugmuUDEgQCiIvrQRHAi7N0ytDoWKAQFCwX/r5ScO7jx6+viUGiGoCAggKfivu2zextNrJtaKQflggKzgv3zlhN56N4QDQQBZQYH5f36+/P+lMVA+GMAVRCS0fG4EMeK/fvANMwOLgQBMgdXrDw9X6IOZPmsu3qt6CmYCAUxBW7KzzsH9nhb/i9tvNIn6QZSCALIb1FZfmO70aWm5HJQPBsgK/qt3rrx/vAzKgQJkBc+T7vRPXn9FA8qFALiCkszCWXe6BP9rzt3nH5UZDhVFKEj4eO/JTW8FIMuk+9TDnT0QUSCAmyBlEDg7AMRwn9mnq8wDFgMBJDfISQqCaS0RUzANAciOxAoIKPj/HwDL5k4xG94BrQAAAABJRU5ErkJggg=="

export async function exportPedia(onlyCurrentLanguage = false) {
  document.body.style.cursor = "wait";
  let jsPath = (document.getElementById("xpedia-js") as HTMLScriptElement)?.src;
  let js = await fetchText(jsPath);
  let mainCSS = document.getElementById("main-css") as HTMLLinkElement;
  let style = mainCSS.href?(await fetchText(mainCSS.href)):mainCSS.innerHTML;  

  let src = rul.src;
  
  if(onlyCurrentLanguage){
    let langs = {};
    langs[defaultLanguage] = src.langs[defaultLanguage];
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
    window.xpedia = "${packed}";
    window.gameDir = ".";
    window.xpediaDir = "xpedia/";
  </script>
  <script>${js}</script>
</head>`;
    
  download("xpedia.html", html);
  document.body.style.cursor = "default";
}

export function invisible(t){
  return `<span style="visibility:hidden">${t}</span>`;
}

//export const favicon = "data:image/png;base64,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";
//export const emptyImg = "0.png";