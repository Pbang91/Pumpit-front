<script lang="ts">
  import PostCard from '../components/Post/PostCard.svelte';
  import { authStore } from '../stores/authStore';
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';
  import api from '../lib/api';
  import { mockPosts } from '../lib/mock/posts';

  let posts = mockPosts;

  const { isLoggedIn } = get(authStore);

  onMount(async () => {
    const res = await api.get('/posts');
    posts = res.data.data; // 예: { id, title, content, createdAt, user: { id, nickname } }
  });
</script>

<div class="max-w-2xl mx-auto py-8 px-4 space-y-4">
  <h1 class="text-2xl font-bold mb-4">🔥 커뮤니티 피드</h1>

  {#if isLoggedIn}
    <button
      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      on:click={() => console.log('글쓰기 이동')}
    >
      글 작성하기
    </button>
  {/if}

  {#each posts as post}
    <PostCard {post} />
  {/each}
</div>
