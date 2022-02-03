export type KakaoLoginRequest = {
  code: string | null;
  redirectUri: string;
};

export type KakaoLoginResponse = {
  accessToken: string;
  tokenType: string;
};
