import type { LoginRequest, RegisterRequest } from "../../types";
import API from "../api";
import { API_ROUTES } from "../apiRoutes";

export const register = async (
  data: RegisterRequest,
): Promise<{ accessToken: string }> =>
  (await API.post(API_ROUTES.AUTH.REGISTER, data)).data;

export const login = async (
  data: LoginRequest,
): Promise<{ accessToken: string }> =>
  (await API.post(API_ROUTES.AUTH.LOGIN, data)).data;

export const refresh = async (): Promise<{ accessToken: string }> =>
  (await API.post(API_ROUTES.AUTH.REFRESH)).data;

export const logout = async (): Promise<{ message: string }> =>
  (await API.post(API_ROUTES.AUTH.LOGOUT)).data;
