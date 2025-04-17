import { writable } from 'svelte/store';

export const loggedIn = writable(false);

export function login() {
  loggedIn.set(true);
}

export function logout() {
  loggedIn.set(false);
}
