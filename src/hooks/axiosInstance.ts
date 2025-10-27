// src/utils/axiosInstance.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://sandbox.woohoo.in", // change to your API base URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data, // unwrap response
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized! Redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
