<script lang="ts">
  import Header from '../components/Header.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  import { loggedIn } from '../stores/authStore'; // 로그인 상태를 관리하는 store

  let isLoggedIn = false;

  // store 구독
  $: isLoggedIn = $loggedIn;
</script>

<div class="flex flex-col h-screen w-screen overflow-hidden">
  <Header />
  <div class="flex flex-1 overflow-hidden">
    {#if isLoggedIn}
      <Sidebar className="w-64 bg-gray-800 text-white flex-shrink-0" />
    {/if}
    <main class="flex-1 bg-gray-50 overflow-auto">
      <slot />
    </main>
  </div>
</div>
