<script lang="ts">
  import { clearAuth } from '../stores/authStore';
  import { push } from 'svelte-spa-router';

  const logout = () => {
    clearAuth();
    push('/login');
  };
</script>

<button on:click={logout} class="text-sm text-gray-600 hover:underline"> 로그아웃 </button>
