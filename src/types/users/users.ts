import type { IEvent, Participation } from "../events";

export interface GetUserInfoRes {
  id: string | null;
  name: string | null;
  email: string | null;
}

export interface UserState extends GetUserInfoRes {
  organizedEvents: null | IEvent[];
  participations: Participation[] | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export interface User {
  id: string;
  email: string;
  name: string;
  organizedEvents: IEvent[] | [];
  participations: Participation[] | [];
}
