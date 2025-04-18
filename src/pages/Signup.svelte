<script lang="ts">
  import { push, link } from 'svelte-spa-router';
  let name = '';
  let email = '';
  let password = '';

  const signup = async () => {
    // TODO: 실제 API 연결
    console.log({ name, email, password });
    // 가입 완료 후 로그인 페이지로
    push('/login');
  };
</script>

<div class="flex-1 flex items-center justify-center bg-gray-50">
  <div class="w-full max-w-md p-8 bg-white rounded-xl shadow-md space-y-6">
    <h1 class="text-2xl font-bold text-center text-gray-800">회원가입</h1>

    <form on:submit|preventDefault={signup} class="space-y-4">
      <div>
        <label for="name" class="text-sm text-gray-600 block mb-1">이름</label>
        <input
          id="name"
          type="text"
          bind:value={name}
          placeholder="보여줄 이름을 입력해 주세요."
          class="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label for="email" class="text-sm text-gray-600 block mb-1">이메일</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          placeholder="이메일을 입력해 주세요."
          class="w-full border-b border-gray-300 focus:border-blue-500 focus:outline-none py-2 text-sm placeholder-gray-400"
        />
      </div>

      <div>
        <label for="password" class="text-sm text-gray-600 block mb-1">비밀번호</label>
        <input
          id="password"
          type="password"
          bind:value={password}
          placeholder="비밀번호를 입력해 주세요."
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
