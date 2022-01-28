export const storeToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const getAccessToken = (): string => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) throw new Error('no access token');

  return accessToken;
};
