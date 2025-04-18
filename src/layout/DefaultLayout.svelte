<script lang="ts">
  import Header from '../components/Header.svelte';
</script>

<div class="flex flex-col min-h-screen">
  <Header />
  <main class="flex flex-1">
    <slot />
  </main>
</div>
