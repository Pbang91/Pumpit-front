<script lang="ts">
  import { onMount } from 'svelte';
  import { guardRoot } from '@/lib/authGuard';
  import Header from '@/components/Header.svelte';

  onMount(() => {
    guardRoot();
  });
</script>

<Header />
