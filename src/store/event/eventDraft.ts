import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface EventDraft {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
}

interface EventDraftState {
  draft: EventDraft;
  setField: (field: keyof EventDraft, value: string) => void;
  clearDraft: () => void;
}

const initialDraft: EventDraft = {
  title: "",
  description: "",
  date: "",
  time: "",
  location: "",
  capacity: "",
};

export const useEventDraftStore = create<EventDraftState>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setField: (field, value) =>
        set((state) => ({ draft: { ...state.draft, [field]: value } })),
      clearDraft: () => set({ draft: initialDraft }),
    }),
    {
      name: "event-draft-storage",
    },
  ),
);
