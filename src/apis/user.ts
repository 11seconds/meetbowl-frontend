import { KakaoDto } from 'apis/dtos';
import { AxiosError } from 'axios';
import axios from 'utils/customAxios';
import { UserDto } from './dtos';

export const kakaoLogin = async ({ code, redirectUri }: KakaoDto.Request): Promise<KakaoDto.Response> => {
  try {
    return (await axios.post('/users/login', { code, redirectUri })).data;
  } catch (error) {
    const serverError = error as AxiosError;
    throw new Error(serverError.response?.data.detail);
  }
};

export const getCurrentUser = async (): Promise<UserDto.User> => {
  try {
    return (await axios.get('/users/me')).data;
  } catch (error) {
    const serverError = error as AxiosError;
    throw new Error(serverError.response?.data.detail);
  }
};

export const updateNickname = async (nickname: string) => {
  try {
    await axios.patch('/users/me', { nickname });
  } catch (error) {
    const serverError = error as AxiosError;
    throw new Error(serverError.response?.data.detail);
  }
};
