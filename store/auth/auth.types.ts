export interface AuthTokens {
  accessToken?: string;
  refreshToken?: string;
  idToken?: string;
}

export interface AuthState extends AuthTokens {
  loading: boolean;
  error?: string | unknown;
  isAuthenticated: boolean;
}
