<script lang="ts">
  import { authStore, clearAuth } from '@/stores/authStore';
  import { push } from 'svelte-spa-router';
  import { onMount } from 'svelte';
  import { userStore, clearUser } from '@/stores/userStore';
  import { fetchProfile } from '@/lib/api/user';

  onMount(async () => {
    const user = await fetchProfile();
    userStore.set(user);
  });

  const logout = () => {
    clearAuth();
    clearUser();
    push('/login');
  };
</script>

{#if $authStore.isLoggedIn}
  <div class="max-w-xl mx-auto p-6 bg-white rounded shadow space-y-4">
    <button on:click={logout} class="text-sm text-gray-600 hover:underline"> 로그아웃 </button>

    <h1 class="text-xl font-bold text-gray-800">내 프로필</h1>
    <div class="text-sm text-gray-700">
      <p><strong>닉네임:</strong> {$userStore?.nickName ?? '닉네임을 설정해주세요!'}</p>
      <p><strong>이메일:</strong> {$userStore?.email ?? '이메일을 설정해주세요!'}</p>
      <p>
        <strong>가입일:</strong>
        {$userStore
          ? new Date($userStore.createdAt).toLocaleString('ko', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
          : '가입해'}
      </p>
    </div>
  </div>
{:else}
  <div class="text-center mt-16 text-gray-400">로그인 정보가 없습니다.</div>
{/if}
