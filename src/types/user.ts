export interface EmailLoginRequest {
  email: string;
  password: string;
}

export interface EmailLoginResponse {
  tempCode: string;
}

export interface AuthTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  id: number;
  email: string | null;
  nickName: string | null;
  oauthProviders: string[];
  createdAt: string;
}
