<script lang="ts">
  import { link } from 'svelte-spa-router';
</script>

<div class="flex items-center justify-center h-full bg-gray-50">
  <div class="text-center space-y-6 max-w-lg px-4">
    <h1 class="text-4xl font-bold text-blue-600">PumpIt</h1>
    <p class="text-lg text-gray-700">운동을 기록하고, 나누고, 성장하세요 💪</p>

    <div class="flex justify-center gap-4 mt-4">
      <a href="/login" use:link class="px-6 py-2 bg-blue-600 text-white rounded"> 로그인 </a>
      <a
        href="/signup"
        use:link
        class="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
      >
        회원가입
      </a>
    </div>
  </div>
</div>
