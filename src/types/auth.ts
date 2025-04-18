export interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}
