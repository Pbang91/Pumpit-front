// src/lib/api/user.ts
import api from '../customApi';
import { type ApiSuccessResponse } from '../../types/api';
import type { User } from '../../types/user';

export const fetchProfile = async (): Promise<User | null> => {
  try {
    const res = await api.get<ApiSuccessResponse<User>>('/users/me');

    console.log(res);

    console.log(res.data);

    return res.data.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};
