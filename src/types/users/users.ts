import type { Participation } from "../events";

export interface GetUserInfoRes {
  id: string | null;
  name: string | null;
  email: string | null;
}

export interface UserState extends GetUserInfoRes {
  setUser: (user: GetUserInfoRes) => void;
  clearUser: () => void;
}

export interface User {
  id: string;
  email: string;
  name: string;
  organizedEvents: Event[] | [];
  participations: Participation[] | [];
}
