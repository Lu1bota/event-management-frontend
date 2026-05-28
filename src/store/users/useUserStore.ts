import { create } from "zustand";
import type { User, UserState } from "../../types";

export const useUserStore = create<UserState>()((set) => ({
  id: null,
  name: null,
  email: null,
  organizedEvents: null,
  participations: null,
  setUser: (data: User) => {
    set(
      {
        id: data.id,
        name: data.name,
        email: data.email,
        organizedEvents: data.organizedEvents,
        participations: data.participations,
      },
      false,
    );
  },
  clearUser: () =>
    set(
      {
        id: null,
        name: null,
        email: null,
        organizedEvents: null,
        participations: null,
      },
      false,
    ),
}));
