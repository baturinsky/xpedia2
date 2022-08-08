import { get, writable } from 'svelte/store';

export const revealed = writable(false);
let revealedLock = false;

export function reveal(on?) {
  if(!revealedLock)
    revealed.update(v => on==undefined?!v:on);
}

export function revealLock(on?) {
  revealedLock = on==undefined?!revealedLock:on;
  revealed.update(v => revealedLock);
}