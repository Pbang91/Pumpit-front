<script lang="ts">
  const menus = [
    { name: '피드', href: '/feed' },
    { name: '운동기록', href: '/log' },
    { name: '채팅', href: '/chat' },
    { name: '프로필', href: '/profile' },
  ];
</script>

<aside class="w-48 bg-gray-100 border-r h-full p-4 space-y-2">
  {#each menus as { name, href }}
    <a class="block cursor-pointer px-3 py-2 rounded hover:bg-gray-200 transition" {href}>
      {name}
    </a>
  {/each}
</aside>
