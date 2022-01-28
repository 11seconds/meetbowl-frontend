export type KakaoLoginRequest = {
  code: string | null;
};

export type KakaoLoginResponse = {
  access_token: string;
  token_type: string;
};
