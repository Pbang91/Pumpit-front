import { writable } from 'svelte/store';
import type { AuthState } from '../types/auth';

const defaultState: AuthState = {
  isLoggedIn: !!localStorage.getItem('accessToken'),
  accessToken: localStorage.getItem('accessToken'),
  refreshToken: localStorage.getItem('refreshToken'),
};

export const authStore = writable<AuthState>(defaultState);

export const setAuth = (accessToken: string, refreshToken: string) => {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);

  authStore.set({
    isLoggedIn: true,
    accessToken,
    refreshToken,
  });
};

export const clearAuth = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');

  authStore.set({
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
  });
};
