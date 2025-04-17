<script lang="ts">
  import { link } from 'svelte-spa-router';

  let name = '';
  let email = '';
  let password = '';

  const signup = () => {
    // TODO: 실제 회원가입 처리 로직
    console.log('회원가입 시도:', name, email, password);
  };
</script>

<div class="flex items-center justify-center h-full bg-gray-50">
  <div class="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
    <h1 class="text-2xl font-bold mb-6 text-center">회원가입</h1>

    <form class="space-y-4" on:submit|preventDefault={signup}>
      <input
        type="text"
        bind:value={name}
        placeholder="이름"
        class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

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
        회원가입
      </button>
    </form>

    <div class="mt-4 text-sm text-center text-gray-600">
      이미 계정이 있으신가요?
      <a href="/login" use:link class="text-blue-600 hover:underline">로그인</a>
    </div>
  </div>
</div>
