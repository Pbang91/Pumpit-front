<script lang="ts">
  export let post: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    user: {
      id: number;
      nickname: string;
    };
  };

  const dateOption: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
</script>

<div class="bg-white shadow-md rounded-xl p-4 space-y-2">
  <div class="flex justify-between items-center text-sm text-gray-500">
    <span class="font-semibold text-gray-700">{post.user.nickname}</span>
    <span>{new Date(post.createdAt).toLocaleDateString('ko', dateOption)}</span>
  </div>

  <h2 class="text-lg font-bold text-gray-800">{post.title}</h2>
  <p class="text-gray-700 text-sm whitespace-pre-line line-clamp-3">{post.content}</p>

  <!-- 나중에 좋아요, 댓글 추가 -->
</div>
