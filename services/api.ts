import axios from 'axios';
import { store } from '../store/store';
import { refreshTokenThunk } from '../store/auth/auth.thunks';
import { logout } from '../store/auth/auth.slice';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

let isRefreshing = false;
let queue: any[] = [];

api.interceptors.request.use(config => {
  const token = store.getState().auth.accessToken;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise(resolve => {
          queue.push((token: string) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(api(originalRequest));
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      const refreshToken = store.getState().auth.refreshToken;
      if (!refreshToken) {
        store.dispatch(logout());
        return Promise.reject(error);
      }

      try {
        const result = await store.dispatch(
          refreshTokenThunk(refreshToken)
        ).unwrap();

        queue.forEach(cb => cb(result.accessToken));
        queue = [];

        originalRequest.headers.Authorization =
          `Bearer ${result.accessToken}`;
        return api(originalRequest);
      } catch {
        store.dispatch(logout());
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }

    if (error.response?.status >= 500) {
      console.error('🔥 Error servidor', error.response.data);
    }

    return Promise.reject(error);
  }
);

export { api };
