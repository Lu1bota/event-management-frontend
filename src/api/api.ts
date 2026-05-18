import axios from "axios";
import { API_ROUTES } from "./apiRoutes";

interface QueueItem {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}

let isRefreshing = false;
let failedQueue: QueueItem[] = [];

const processQueue = (error: unknown) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

const API = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
  withCredentials: true,
});

let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

API.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status !== 401 || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (originalRequest.url === API_ROUTES.AUTH.REFRESH) {
      setAccessToken(null);
      window.location.href = "/sign-in";
      return Promise.reject(error);
    }

    const url = originalRequest.url ?? "";
    if (url === API_ROUTES.AUTH.LOGIN || url === API_ROUTES.AUTH.REGISTER) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      })
        .then(() => API(originalRequest))
        .catch((err) => Promise.reject(err));
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      const { data } = await API.post<{ accessToken: string }>(
        API_ROUTES.AUTH.REFRESH,
      );
      setAccessToken(data.accessToken);
      processQueue(null);
      return API(originalRequest);
    } catch (refreshError) {
      setAccessToken(null);
      processQueue(refreshError);
      window.location.href = "/sign-in";
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);

export default API;
