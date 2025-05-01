<script lang="ts">
  import { push, link } from 'svelte-spa-router';
  import api from '@lib/customApi';
  import type { EmailLoginRequest, IssueAuthCodeResponse } from '@/types/user';
  import { ERROR_MESSAEGS, type ApiExceptionResponse, type ApiSuccessResponse } from '@/types/api';
  import axios from 'axios';
  import { fetchAuthToken } from '@/lib/api/authToken';

  let email = '';
  let password = '';
  let rememberMe = false;

  const emailLoginUrl = import.meta.env.VITE_API_URL + '/users/email/login';

  const loginWithEmail = async () => {
    const payload: EmailLoginRequest = {
      email,
      password,
    };

    try {
      const res = await api.post<ApiSuccessResponse<IssueAuthCodeResponse>>(emailLoginUrl, payload);

      await fetchAuthToken(res.data.data.tempCode, rememberMe);

      push('/log');
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.data) {
        const apiErr = e.response.data as ApiExceptionResponse;
        const message =
          ERROR_MESSAEGS[apiErr.code] ?? apiErr.description ?? '알 수 없는 에러입니다';

        alert(message);
      }
    }
  };

  const loginWithKakao = async () => {
    const res = await fetch('env 설정을 하자요');
    const { redirectUrl } = await res.json();
    window.location.href = redirectUrl;
  };
</script>

<div class="flex-1 flex items-center justify-center bg-gray-50">
  <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-md space-y-6">
    <h1 class="text-2xl font-bold text-center text-gray-800">Hello PumpIt</h1>

    <form on:submit|preventDefault={loginWithEmail} class="space-y-4">
      <div class="relative">
        <label for="email" class="text-sm text-gray-600 block mb-1">이메일</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          placeholder="이메일을 입력해주세요"
          class="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm placeholder-gray-400"
        />
      </div>

      <div class="relative">
        <label for="password" class="text-sm text-gray-600 block mb-1">비밀번호</label>
        <input
          id="password"
          type="password"
          bind:value={password}
          placeholder="비밀번호를 입력해 주세요."
          class="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm placeholder-gray-400"
        />
      </div>

      <label class="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
        <input
          type="checkbox"
          bind:checked={rememberMe}
          class="appearance-none w-5 h-5 rounded-md border border-gray-300 checked:bg-blue-600 checked:border-blue-600
                 flex items-center justify-center transition-colors duration-150"
        />
        <span>로그인 유지하기</span>
      </label>

      <style>
        input[type='checkbox']:checked::before {
          content: '✔';
          display: block;
          color: white;
          font-size: 0.75rem;
          text-align: center;
          line-height: 1.25rem;
        }
      </style>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        로그인
      </button>
    </form>

    <div class="flex justify-between text-sm text-gray-500">
      <a href="/signup" use:link class="hover:underline">회원가입</a>
      <a href="/forgot" use:link class="hover:underline">비밀번호 찾기</a>
    </div>

    <div class="text-center text-sm text-gray-400">또는</div>

    <button
      on:click={loginWithKakao}
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
