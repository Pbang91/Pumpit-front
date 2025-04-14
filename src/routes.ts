import Feed from './pages/Feed.svelte';
import WorkoutLog from './pages/WorkoutLog.svelte';
import Chat from './pages/Chat.svelte';
import Profile from './pages/Profile.svelte';
import Login from './pages/Login.svelte';
import RootPage from './pages/RootPage.svelte';
import Signup from './pages/Signup.svelte';
import ForgotPassword from './pages/ForgotPassword.svelte';

export default {
  '/': RootPage,
  '/login': Login,
  '/signup': Signup,
  '/forgot': ForgotPassword,
  '/feed': Feed,
  '/log': WorkoutLog,
  '/chat': Chat,
  '/profile': Profile,
};
