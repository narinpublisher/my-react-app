//  📁 src/stores/authStore.ts

import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: number;
  name: string;
};

type AuthState = {
  user: User | null;
  login: (name: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,

      login: (name) =>
        set({
          user: {
            id: Date.now(),
            name,
          },
        }),

      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);