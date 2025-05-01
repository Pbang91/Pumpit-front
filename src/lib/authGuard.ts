import { get } from 'svelte/store';
import { authStore } from '@stores/authStore';
import { push } from 'svelte-spa-router';

export const guardRoot = () => {
  const { isLoggedIn } = get(authStore);

  if (isLoggedIn) {
    push('/log');
  } else {
    push('/feed');
  }
};

export const guardProtectedPage = (redirectTo = '/login'): boolean => {
  const { isLoggedIn } = get(authStore);

  if (!isLoggedIn) {
    push(redirectTo);

    return false;
  }

  return true;
};
