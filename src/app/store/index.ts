import { create } from "zustand";
import type { StoreInterface, ThemeType } from "./StoreInterface";

const useStore = create((set) => ({
  theme: localStorage.getItem("themeMode") || "light",
  toggleThemeL: () => {
    set((state: StoreInterface) => {
      const nextTheme: ThemeType = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", nextTheme);

      return { theme: nextTheme };
    });
  },
}));

export default useStore;
