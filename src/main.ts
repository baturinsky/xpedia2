import Ruleset from "./Ruleset";
import App from "./App.svelte";
import { loadByHttp } from "./load";
import { reveal, revealLock } from "./store";

function unescape(s) {
  let lookup = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">"
  };
  return s.replace(/&amp;|&quot;|&lt;|&gt;/g, c => lookup[c]);
}

let app: App;

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

addEventListener("load", showPedia)

addEventListener("hashchange", e => {
  if (location.hash.substring(0, 8) != "##SEARCH") {
    let input = document.getElementById("search-string");
    input.blur();
  }
})

async function test() {
  let { ruls, langs } = await loadByHttp();
  let rul = new Ruleset()
  await rul.load({ ruls, langs });
}

//test();

export default app;

const enabledQ = false;

function enableKeys() {

  addEventListener("keydown", e => {
    console.log(e);
    switch (e.code) {
      case "KeyQ":
        if (!enabledQ)
          break;
        let input = document.getElementById("search-string")
        if (input && input instanceof HTMLInputElement && input != document.activeElement) {
          input.value = ""
          setInterval(() => input.focus(), 1);
        }
        break;
      case "ShiftLeft":
      case "ShiftRight":
        reveal(true);
        break;
    }
  })

  addEventListener("keyup", e => {
    switch (e.code) {
      case "ShiftLeft":
      case "ShiftRight":
        reveal(false);
        break;
    }
  })

}


enableKeys();