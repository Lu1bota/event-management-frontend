import { create } from "zustand";
import type { User, UserState } from "../../types";

export const useUserStore = create<UserState>()((set) => ({
  id: null,
  name: null,
  email: null,
  setUser: (data: User) => {
    set({ id: data.id, name: data.name, email: data.email }, false);
  },
  clearUser: () => set({ id: null, name: null, email: null }, false),
}));
