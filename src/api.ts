/* eslint-disable no-console */
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from 'token';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: 'https://11.react.pages.academy/six-cities-simple',
  timeout: 5000,
};

export const createAPI = (): AxiosInstance => {
  const api = axios.create(axiosRequestConfig);
  console.log(getToken());
  api.interceptors.request.use(
    (config: AxiosRequestConfig = {}) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  return api;
};
