<script lang="ts">
  import { push, link } from 'svelte-spa-router';
  import type { EmailSignupRequest, IssueAuthCodeResponse } from '@/types/user';
  import api from '@lib/customApi';
  import { type ApiExceptionResponse, type ApiSuccessResponse, ERROR_MESSAEGS } from '@/types/api';

  import axios from 'axios';
  import { fetchAuthToken } from '@lib/api/authToken';

  const signupPayload: EmailSignupRequest = {
    email: '',
    nickName: '',
    password: '',
    phone: null,
  };

  const emailSignupUrl = import.meta.env.VITE_API_URL + '/users/email';

  const signup = async () => {
    try {
      const res = await api.post<ApiSuccessResponse<IssueAuthCodeResponse>>(
        emailSignupUrl,
        signupPayload
      );

      await fetchAuthToken(res.data.data.tempCode, false);
      push('/log');
    } catch (e) {
      if (axios.isAxiosError(e) && e.response?.data) {
        const apiErr = e.response.data as ApiExceptionResponse;
        const message =
          ERROR_MESSAEGS[apiErr.code] ?? apiErr.description ?? '알 수 없는 오류 입니다';

        alert(message);
      }
    }
    push('/login');
  };
</script>

<div class="flex-1 flex items-center justify-center bg-gray-50">
  <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-md space-y-6">
    <h1 class="text-2xl font-bold text-center text-gray-800">회원가입</h1>

    <form on:submit|preventDefault={signup} class="space-y-4">
      <div>
        <label for="nickName" class="text-sm text-gray-600 block mb-1">닉네임(필수)</label>
        <input
          id="nickName"
          type="text"
          bind:value={signupPayload.nickName}
          placeholder="프로필명을 입력해주세요"
          class="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label for="email" class="text-sm text-gray-600 block mb-1">이메일(필수)</label>
        <input
          id="email"
          type="email"
          bind:value={signupPayload.email}
          placeholder="이메일을 입력해 주세요."
          class="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label for="password" class="text-sm text-gray-600 block mb-1">비밀번호(필수)</label>
        <input
          id="password"
          type="password"
          bind:value={signupPayload.password}
          placeholder="비밀번호를 입력해 주세요."
          class="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label for="phone" class="text-sm text-gray-400 block mb-1">모바일 번호(선택)</label>
        <input
          id="phone"
          type="tel"
          bind:value={signupPayload.phone}
          placeholder="전화번호를 입력해 주세요. 입력 시 정보 제공에 활용됩니다"
          class="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm placeholder-gray-400"
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        회원가입
      </button>
    </form>

    <p class="text-sm text-center text-gray-500">
      이미 계정이 있으신가요?
      <a href="/login" use:link class="text-blue-600 hover:underline">로그인</a>
    </p>
  </div>
</div>
