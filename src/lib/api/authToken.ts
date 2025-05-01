import axios from 'axios';
import api from '@lib/customApi';
import { setAuth } from '@stores/authStore';
import { type ApiSuccessResponse, ERROR_MESSAEGS, type ApiExceptionResponse } from '@/types/api';
import type { AuthTokenResponse } from '@/types/user';

const authTokenUrl = import.meta.env.VITE_API_URL + '/users/auth';

export const fetchAuthToken = async (authCode: string, remember: boolean): Promise<void> => {
  try {
    const res = await api.get<ApiSuccessResponse<AuthTokenResponse>>(
      `${authTokenUrl}?c=${authCode}&r=${remember}`
    );

    const accessToken = res.data.data.accessToken;
    const refreshToken = res.data.data.refreshToken;

    setAuth(accessToken, refreshToken, remember);
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.data) {
      const apiErr = e.response.data as ApiExceptionResponse;
      const message = ERROR_MESSAEGS[apiErr.code] ?? apiErr.description ?? '알 수 없는 에러입니다';

      alert(message);
    }
  }
};
