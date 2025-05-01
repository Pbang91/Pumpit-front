export interface EmailSignupRequest {
  email: string;
  nickName: string;
  password: string;
  phone?: string | null;
}

export interface EmailLoginRequest {
  email: string;
  password: string;
}

export interface IssueAuthCodeResponse {
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
  phone: string | null;
  oauthProviders: string[];
  createdAt: string;
}
