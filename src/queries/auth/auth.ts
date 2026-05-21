import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosErrorRes, LoginRequest, RegisterRequest } from "../../types";
import { login, logout, refresh, register } from "../../api";
import toast from "react-hot-toast";
import { setAccessToken, setIsLoggedOut } from "../../api/api";
import { useUserStore } from "../../store/users";

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation<{ accessToken: string }, AxiosErrorRes, RegisterRequest>({
    mutationFn: (data: RegisterRequest) => register(data),
    mutationKey: ["auth-register"],
    onSuccess: ({ accessToken }) => {
      setAccessToken(accessToken);
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message || error.message);
    },
  });
};

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<{ accessToken: string }, AxiosErrorRes, LoginRequest>({
    mutationFn: (data: LoginRequest) => login(data),
    mutationKey: ["auth-login"],
    onSuccess: ({ accessToken }) => {
      setIsLoggedOut(false);
      setAccessToken(accessToken);
      queryClient.invalidateQueries({ queryKey: ["userInfo"] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message || error.message);
    },
  });
};

export const useRefresh = () =>
  useMutation<{ accessToken: string }, AxiosErrorRes>({
    mutationFn: () => refresh(),
    mutationKey: ["auth-refresh"],
    onError: (error) => {
      toast.error(error.response?.data.message || error.message);
    },
  });

export const useLogout = () => {
  const queryClient = useQueryClient();
  const clearUser = useUserStore((state) => state.clearUser);

  return useMutation<{ message: string }, AxiosErrorRes>({
    mutationFn: () => logout(),
    mutationKey: ["auth-logout"],
    onSuccess: () => {
      setIsLoggedOut(true);
      setAccessToken(null);
      clearUser();
      queryClient.removeQueries({ queryKey: ["userInfo"] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message || error.message);
    },
  });
};
