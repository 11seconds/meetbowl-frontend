import axios, { AxiosInstance } from 'axios';

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

export default customAxios;
