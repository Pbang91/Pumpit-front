<script lang="ts">
    import Header from '../components/Header.svelte';
    import Sidebar from '../components/Sidebar.svelte';
  </script>
  
  <div class="flex flex-col h-screen">
    <Header title="PumpIt" />
    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 p-6 bg-gray-50 overflow-auto">
        <slot />
      </main>
    </div>
  </div>
  