import { writable } from 'svelte/store';
import type { AuthState } from '../types/auth';

const accessToken = localStorage.getItem('accessToken') ?? sessionStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken') ?? sessionStorage.getItem('refreshToken');

const defaultState: AuthState = {
  isLoggedIn: !!accessToken,
  accessToken,
  refreshToken,
};

export const authStore = writable<AuthState>(defaultState);

/**
 * 로그인 성공 시 토큰 저장
 *
 * @param accessToken
 * @param refreshToken
 * @param rememberMe
 */
export const setAuth = async (
  accessToken: string,
  refreshToken: string,
  rememberMe: boolean = false
) => {
  const storage = rememberMe ? localStorage : sessionStorage;

  storage.setItem('accessToken', accessToken);
  storage.setItem('refreshToken', refreshToken);

  authStore.set({
    isLoggedIn: true,
    accessToken,
    refreshToken,
  });
};

/**
 * 로그아웃 등 진행할 시 스토리지 클리어
 */
export const clearAuth = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('refreshToken');

  authStore.set({
    isLoggedIn: false,
    accessToken: null,
    refreshToken: null,
  });
};
