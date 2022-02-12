export type Request = {
  code: string | null;
  redirectUri: string;
};

export type Response = {
  accessToken: string;
  tokenType: string;
};
