import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  checkLogin: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  checkLogin: () => {
    const token = localStorage.getItem("token");
    set({
      isLoggedIn: Boolean(token),
    });
  },
}));
