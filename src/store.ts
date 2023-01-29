import { get, writable } from 'svelte/store';

export const revealed = writable(false);
let revealedLock = false;

export const markersLoaded = writable(false);

export const linksPageSorted = writable(false);
export const loadingFile = writable("");
export const leftRightClickSwipe = writable(null);

export function reveal(on?) {
  if(!revealedLock)
    revealed.update(v => on==undefined?!v:on);
}

export function revealLock(on?) {
  revealedLock = on==undefined?!revealedLock:on;
  revealed.update(v => revealedLock);
}

export const loaded = writable(false);

export function warn(text:string){
  loadingFile.update(t => t + " · <em class='warning'>" + text + "</em>");  
}

export function inform(text:string){
  loadingFile.update(t => t + " · " + text);  
}

