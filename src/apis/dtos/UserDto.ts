export type Response = {
  id: string;
  email?: string;
  nickname: string;
  isActive: boolean;
};

export type KakaoLoginRequest = {
  code: string | null;
  redirectUri: string;
};

export type KakaoLoginResponse = {
  accessToken: string;
  tokenType: string;
};
