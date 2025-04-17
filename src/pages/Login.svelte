<script lang="ts">
  import axios from 'axios';
  import { link } from 'svelte-spa-router';
  import type { AuthTokenResponse, EmailLoginRequest, EmailLoginResponse } from '../types/user';
  import type { ApiSuccessResponse } from '../types/api';
  const emailLoginUrl = import.meta.env.VITE_API_URL + '/users/email/login';
  const authUrl = import.meta.env.VITE_API_URL + '/users/auth';

  let email = '';
  let password = '';

  const login = async () => {
    const payload: EmailLoginRequest = {
      email,
      password,
    };

    const loginRes = await axios.post<ApiSuccessResponse<EmailLoginResponse>>(
      emailLoginUrl,
      payload
    );

    if (loginRes.status >= 200 && loginRes.status < 300) {
      const tempCode = loginRes.data.data.tempCode;
      console.log(tempCode);
      const tokenRes = await axios.get<ApiSuccessResponse<AuthTokenResponse>>(
        `${authUrl}?c=${tempCode}`
      );

      if (tokenRes.status >= 200 && tokenRes.status < 300) {
        localStorage.setItem('accessToken', tokenRes.data.data.accessToken);
        localStorage.setItem('refreshToken', tokenRes.data.data.refreshToken);
      }
    }
  };

  const kakaoLogin = async () => {
    const res = await fetch('env 설정을 하자요');
    const { redirectUrl } = await res.json();
    window.location.href = redirectUrl;
  };
</script>

<div class="flex items-center justify-center h-full bg-gray-50">
  <div class="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
    <h1 class="text-2xl font-bold mb-6 text-center">PumpIt 로그인</h1>

    <form class="space-y-4" on:submit|preventDefault={login}>
      <input
        type="email"
        bind:value={email}
        placeholder="이메일"
        class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="password"
        bind:value={password}
        placeholder="비밀번호"
        class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        로그인
      </button>
    </form>

    <div class="flex justify-between text-sm text-gray-500 mt-4">
      <a href="/signup" use:link class="hover:underline">회원가입</a>
      <a href="/forgot" use:link class="hover:underline">비밀번호 찾기</a>
    </div>

    <div class="my-4 text-center text-gray-400 text-sm">또는</div>

    <div class="space-y-2">
      <button
        on:click={kakaoLogin}
        class="w-full flex items-center justify-center gap-2 py-2 rounded bg-yellow-300 hover:bg-yellow-400 transition"
      >
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
          alt="kakao icon"
          class="w-5 h-5"
        />
        <span class="text-sm font-semibold text-gray-800">Kakao로 로그인</span>
      </button>
    </div>
  </div>
</div>
