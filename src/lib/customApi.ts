import axios from 'axios';
import { push } from 'svelte-spa-router';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  withCredentials: import.meta.env.MODE == 'prod' ? true : false,
});

// 요청 인터셉터: JWT 자동 추가
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken') ?? localStorage.getItem('accessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 응답 인터셉터: 401 처리
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const status = err.response?.status;

    if (status === 401) {
      sessionStorage.removeItem('accessToken');
      localStorage.removeItem('accessToken');
      push('/login');
    } else if (status >= 500) {
      alert('서버 문제 발생. 잠시 후 다시 시도해주세요');
    }

    return Promise.reject(err);
  }
);

export default api;
