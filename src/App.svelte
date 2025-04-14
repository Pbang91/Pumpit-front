<script lang="ts">
  import DefaultLayout from './layout/DefaultLayout.svelte';
  import Router from 'svelte-spa-router';
  import routes from './routes';
</script>

<DefaultLayout>
  <Router {routes} />
</DefaultLayout>
