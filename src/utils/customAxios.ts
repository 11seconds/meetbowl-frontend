import axios, { AxiosInstance } from 'axios';
import { getAccessToken } from './token';

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

// 요청 인터셉터
customAxios.interceptors.request.use(
  (config) => {
    const customHeaders = {
      Authorization: `bearer ${getAccessToken()}`,
    };

    const customConfig = { ...config, headers: { ...config.headers, ...customHeaders } };
    return customConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
customAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
