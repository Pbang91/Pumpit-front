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
