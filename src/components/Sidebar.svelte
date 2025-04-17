<script lang="ts">
  export let className: string = ''; // className prop 정의

  const menus = [
    { name: '피드', href: '/feed' },
    { name: '운동기록', href: '/log' },
    { name: '채팅', href: '/chat' },
    { name: '프로필', href: '/profile' },
  ];
</script>

<aside class={`h-full overflow-auto w-64 bg-gray-800 text-white ${className}`}>
  {#each menus as { name, href }}
    <a class="block cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition" {href}>
      {name}
    </a>
  {/each}
</aside>
