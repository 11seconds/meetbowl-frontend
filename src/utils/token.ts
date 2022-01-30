import jwtDecode, { JwtPayload } from 'jwt-decode';

export const storeToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export const isTokenExisting = (): boolean => {
  const accessToken = localStorage.getItem('accessToken');
  if (!accessToken) return false;
  return true;
};

export const getAccessToken = (): string => {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken as string;
};

export const isTokenValid = (accessToken: string): boolean => {
  const decoded = jwtDecode<JwtPayload>(accessToken);

  if (!decoded.exp) return false;
  return Date.now() >= decoded.exp * 1000;
};
