import Feed from './pages/Feed.svelte';
import WorkoutLog from './pages/WorkoutLog.svelte';
import Chat from './pages/Chat.svelte';
import Profile from './pages/Profile.svelte';

export default {
  '/': Feed,
  '/feed': Feed,
  '/log': WorkoutLog,
  '/chat': Chat,
  '/profile': Profile,
};
