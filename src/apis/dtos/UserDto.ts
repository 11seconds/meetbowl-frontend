export type KakaoLoginRequest = {
  code: string | null;
};

export type KakaoLoginResponse = {
  accessToken: string;
  tokenType: string;
};
