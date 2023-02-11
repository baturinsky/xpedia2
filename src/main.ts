import Ruleset, {rul} from "./Ruleset";
import App from "./App.svelte";
import { loadFromFiles, loadRules } from "./load";
import { reveal, loaded } from "./store";

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
  enableKeys();

  document.body.innerHTML = "";
  document.body.style.display = "block";
  
  new Ruleset();

  loadRules(rul).then(()=>{
    loaded.set(true)
  })

  //@ts-ignore
  app = new App({
    target: document.body
  });
};


async function test() {
  let rul = new Ruleset()
  rul.load(await loadFromFiles());
}


addEventListener("load", showPedia)

//test();

addEventListener("hashchange", e => {
  if (location.hash.substring(0, 8) != "##SEARCH") {
    let input = document.getElementById("search-string");
    input?.blur();
  }
})


export default app;

const enabledQ = false;

function enableKeys() {

  addEventListener("keydown", e => {
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