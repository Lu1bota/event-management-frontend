import type { User } from "../../types";
import API from "../api";
import { API_ROUTES } from "../apiRoutes";

export const getMe = async (): Promise<User> =>
  (await API(API_ROUTES.USERS.ME)).data;
