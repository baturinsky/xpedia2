/**
 * Collection of the basic components to be used by other UI classes
 */
import { defaultLanguage, rul } from "./Ruleset";
import Link from "./Link.svelte";
import Img from "./Img.svelte";
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

export { Link, Img, Intro, LinksPage, LinksList, Value, BaseServiceList, Tr, SpecialBonus, MainTable, Illustration, Subheader, rul };

export const tr = t => rul.tr(t)

export const divider = (i, {vertical, cols} = {vertical:false, cols:0}) => i == 0 ? "" : vertical ? "</br>" : `<span class='list-divider'>&nbsp·${i%(cols||1)?"&nbsp":" "}</span>`;

export const emptyImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAANSURBVBhXY/j//z8DAAj8Av6IXwbgAAAAAElFTkSuQmCC";
export const favicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMAUExURQAAAAMDAwMJCAgICAoKCg0NDQoTEQoTEgsUEg0XFQ0aGR4eHg0tKxMlIhUoJhgoKQ4zLw42LxUyLxcyLw45Mw45NRY0MBowMB81NxI9ORM/OBg+Ox8+OiEzMiE0NCA9PC89OjU2Nj09PRZDPRRFPR9BPBxEPSxCPxdEQRlFQhNLQhVKQxRMRBdPRR1MRh5ORx5VTiRKRCRKRihNSShOSDhHRDJIRTVLSDdOSjtKSD5KSiJVTClXTShVTzdTTSlXUCpWUSpXUCNbVCddVS9aUitfVyxcVz1SUDBYUiNhWStmXipuYThmYzdoYDdqYzl1az13bzV7ckVJSEBWUUNXU0hVVUBZV0JcWE9dXU5jW0pgXkZkYE1kYU1kYEZsZFBjYVBjYklwak51bUJ9dF91c1d4clt5dFp6dVt7dl55dF98eGBoaGZoaGhvbW1tbWdwb2J1b2Vyc2J6eWZ5eGN/e2h5eD2CeUGBd2aBfUiMgkOQg02Sh0qViU+ViUabi02Yjl6UjVabjVKfkWKFgGGLhX+AgH+KiWOakmick0ypm1WgklGhlFKpnFKrnlGwn1OvoFauoVWzpFaypVmwpFe8rlu5qW6xpmG8q2u5q265rX+2q1rBs17Jt1vLvF/NvVzPvGTDtmDHtmDIt2LIt2fJt2bLtmLGuGHHumXFuWbFumjHuW7FumHJuGHJuGPIuGDKuWPLuWPJu2DKumDKu2PKumLLumPLumPLu2XJuWXLuWXLu2TKumHNuWHNumDNu2PMu2TMu2XNu2HJvGPLvWLLvGPLvmXJvWXKvWbKvWfIvmHNvWHMvGHMvWLNvWLMvWPMvWPNvmfPvWnIumrJu2/Iu2jJvW7Lv2vMvWjOvGjNv2vNvm/MvW/Mv3LOv27QvmbPwG/RwnDSwnXSwX/Sx3rWyoePjYiMi4mSkJSXl5qfn6KlpIbDu4LEuYrIvYHSxIPTx4LUx47UyYrVzYPZyonYy5re08zMzMvQz9Hb2drf39rg39rh4N7k5ODj4uvs7AAAAOGYdbwAAAEAdFJOU////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wBT9wclAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACCElEQVQ4T2P4TwCQpCA3pSIrPaMkPhvKBwOEAqvUt1/u3rp86fqjaXFQIRBAKGh4d2PnruPnzp08fnijClQMCOAKmj9snbf3zJnz5/fsurppiQRUFElBx61t+85DwZ6F0lBRJAVvNqzZD5U/f2qzF1QUpiAvL8jOxMPe3t7R0dHGwdbFRCYvLw8sA1XAyvD3lSIDEHAZqoIohp/c36BmwyilP79ZgBJG5ycBScZfzP9gdsPpl63fgVJHzh/hZWDIefEDJg5X8IwjmJOd/dKx8+d3sLNxhjBBhREK/ieuX75r8/lz589fmLd9QZ04VBRJwf8Z83dfOA9UcfzsugmuUDEgQCiIvrQRHAi7N0ytDoWKAQFCwX/r5ScO7jx6+viUGiGoCAggKfivu2zextNrJtaKQflggKzgv3zlhN56N4QDQQBZQYH5f36+/P+lMVA+GMAVRCS0fG4EMeK/fvANMwOLgQBMgdXrDw9X6IOZPmsu3qt6CmYCAUxBW7KzzsH9nhb/i9tvNIn6QZSCALIb1FZfmO70aWm5HJQPBsgK/qt3rrx/vAzKgQJkBc+T7vRPXn9FA8qFALiCkszCWXe6BP9rzt3nH5UZDhVFKEj4eO/JTW8FIMuk+9TDnT0QUSCAmyBlEDg7AMRwn9mnq8wDFgMBJDfISQqCaS0RUzANAciOxAoIKPj/HwDL5k4xG94BrQAAAABJRU5ErkJggg=="

export const tableSections = [
  "FACILITIES",
  "COMMENDATIONS",
  "CRAFTS",
  "ARMORS",
  "CRAFT_WEAPONS",
  "SOLDIERS",
  "ARMORS",
  "MANUFACTURE",
  "ITEMS",
  "ATTACKS",
  "UFO",
  "COUNTRIES",
  "UNITS"
];

export function invisible(t){
  return `<span style="visibility:hidden">${t}</span>`;
}