<script lang="ts">
  import { link } from 'svelte-spa-router';
  import { authStore } from '@stores/authStore';
</script>

<header class="bg-white border-b shadow-sm">
  <div class="mx-auto px-4 py-3 flex justify-between items-center">
    <a href="/" class="text-xl font-bold text-blue-600">PumpIt</a>

    <nav class="flex gap-4 text-sm text-gray-700 items-center">
      {#if $authStore.isLoggedIn}
        <a href="/log" use:link class="hover:underline">운동기록</a>
        <a href="/feed" use:link class="hover:underline">피드</a>
        <a href="/chat" use:link class="hover:underline">채팅</a>
        <a href="/profile" use:link class="hover:underline">프로필</a>
      {:else}
        <a href="/feed" use:link class="hover:underline">피드</a>
        <a href="/login" use:link class="hover:underline">로그인</a>
      {/if}
    </nav>
  </div>
</header>
