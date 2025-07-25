// store/index.ts
import { create } from "zustand";

type ThemeType = "light" | "dark";

interface Store {
  theme: ThemeType;
  toggleTheme: () => void;
}

const useStore = create<Store>((set) => ({
  theme: (localStorage.getItem("themeMode") as ThemeType) || "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useStore;
