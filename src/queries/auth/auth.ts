import { useMutation } from "@tanstack/react-query";
import type { AxiosErrorRes, LoginRequest, RegisterRequest } from "../../types";
import { login, logout, refresh, register } from "../../api";
import toast from "react-hot-toast";

export const useRegister = () =>
  useMutation<{ accessToken: string }, AxiosErrorRes, RegisterRequest>({
    mutationFn: (data: RegisterRequest) => register(data),
    mutationKey: ["auth-register"],
    onError: (error) => {
      toast.error(error.response?.data.message || error.message);
    },
  });

export const useLogin = () =>
  useMutation<{ accessToken: string }, AxiosErrorRes, LoginRequest>({
    mutationFn: (data: LoginRequest) => login(data),
    mutationKey: ["auth-login"],
    onError: (error) => {
      toast.error(error.response?.data.message || error.message);
    },
  });

export const useRefresh = () =>
  useMutation<{ accessToken: string }, AxiosErrorRes>({
    mutationFn: () => refresh(),
    mutationKey: ["auth-refresh"],
    onError: (error) => {
      toast.error(error.response?.data.message || error.message);
    },
  });

export const useLogout = () =>
  useMutation<{ message: string }, AxiosErrorRes>({
    mutationFn: () => logout(),
    mutationKey: ["auth-logout"],
    onError: (error) => {
      toast.error(error.response?.data.message || error.message);
    },
  });
