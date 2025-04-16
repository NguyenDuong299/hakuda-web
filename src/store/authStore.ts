import { create } from "zustand";
import { Users } from "../types";

type AuthState = {
  user: Users | null;
  loading: boolean;
  setUser: (user: Users | null) => void;
  setLoading: (loading: boolean) => void;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
}));
