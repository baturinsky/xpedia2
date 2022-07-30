import Ruleset from "./Ruleset";
import App from "./App.svelte";
import { loadByHttp } from "./load";

function unescape(s) {
  let lookup = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">"
  };
  return s.replace(/&amp;|&quot;|&lt;|&gt;/g, c => lookup[c]);
}

let app:App;

function showPedia() {
  let rulesText = unescape(document.body.textContent);
  document.body.innerHTML = "";
  document.body.style.display = "block";

  new Ruleset();
  //@ts-ignore
  app = new App({
    props: { source: rulesText },
    target: document.body
  });
};

window.addEventListener("load", showPedia)

async function test(){
  let {ruls, langs} = await loadByHttp();
  let rul = new Ruleset()
  await rul.load({ruls, langs});
}

//test();

export default app;
