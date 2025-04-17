<script lang="ts">
  let email = '';
  import { link } from 'svelte-spa-router';

  const handleSubmit = () => {
    // TODO: 이메일 전송 로직
    console.log('비밀번호 재설정 요청', email);
  };
</script>

<div class="flex items-center justify-center h-full bg-gray-50">
  <div class="w-full max-w-sm p-6 bg-white rounded-xl shadow-md">
    <h1 class="text-2xl font-bold mb-6 text-center">비밀번호 찾기</h1>

    <form class="space-y-4" on:submit|preventDefault={handleSubmit}>
      <input
        type="email"
        bind:value={email}
        placeholder="가입한 이메일 주소"
        class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        이메일로 재설정 링크 보내기
      </button>
    </form>

    <div class="text-center text-sm text-gray-500 mt-4">
      <a href="/login" use:link class="hover:underline">← 로그인으로 돌아가기</a>
    </div>
  </div>
</div>
