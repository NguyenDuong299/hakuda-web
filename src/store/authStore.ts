// store/authStore.ts
import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  checkLogin: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,

  login: () => set({ isLoggedIn: true }),

  logout: () => {
    localStorage.removeItem("token");
    set({ isLoggedIn: false });
  },
  checkLogin: () => {
    const token = localStorage.getItem("token");
    set({ isLoggedIn: !!token });
  },
}));
