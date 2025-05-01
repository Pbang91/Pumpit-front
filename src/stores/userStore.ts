import { writable } from 'svelte/store';
import type { User } from '@/types/user';

export const userStore = writable<User | null>(null);

export const clearUser = () => {
  userStore.set(null);
};
