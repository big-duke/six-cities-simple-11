import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: 'https://11.react.pages.academy/six-cities-simple',
  timeout: 5000,
};

export const createAPI = (): AxiosInstance => axios.create(axiosRequestConfig);
