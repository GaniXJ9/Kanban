import { create } from "zustand";
import type { Store, ThemeType } from "./Store";

const useStore = create<Store>((set) => ({
  theme: localStorage.getItem("themeMode") || "light",

  toggleTheme: () => {
    set((state: Store) => {
      const nextTheme: ThemeType = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", nextTheme);

      return { theme: nextTheme };
    });
  },
}));

export default useStore;
