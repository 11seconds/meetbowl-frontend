import axios, { AxiosError, AxiosInstance } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { getAccessToken } from './token';

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

// 요청 인터셉터
customAxios.interceptors.request.use(
  (config) => {
    // 커스텀 헤더
    const customHeaders = {
      Authorization: `bearer ${getAccessToken()}`,
    };

    // camelCase 를 snake_case 로 변경
    const decamelizedData = decamelizeKeys(config.data);
    const decamelizedParams = decamelizeKeys(config.params);

    return {
      ...config,
      headers: { ...config.headers, ...customHeaders },
      data: decamelizedData,
      params: decamelizedParams,
    };
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
customAxios.interceptors.response.use(
  (config) => {
    // snake_case 를 camelCase 로 변경
    const camelizedData = camelizeKeys(config.data);

    return {
      ...config,
      data: camelizedData,
    };
  },
  (error: AxiosError) => {
    // access token 인증 실패 시 /sign-in 으로 fallback
    if (error.response?.status === 401) {
      localStorage.clear();
      window.location.href = '/sign-in';
    }
    return Promise.reject(error);
  }
);

export default customAxios;
