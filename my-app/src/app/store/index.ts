// store/index.ts
import { create } from "zustand";
import type { Store } from "./Store";

type ThemeType = "light" | "dark";

const useStore = create<Store>((set) => ({
  theme: (localStorage.getItem("themeMode") as ThemeType) || "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useStore;
