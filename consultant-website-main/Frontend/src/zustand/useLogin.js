import { create } from "zustand";

const useLogin = create((set) => ({
  isLogged: false,
  setLogged: (value) => set({ isLogged: value }),
}));
