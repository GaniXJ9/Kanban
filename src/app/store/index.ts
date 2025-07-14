import { create } from "zustand";
import type { Id, StoreInterface, ThemeType } from "./StoreInterface";
import type { ColumnType } from "../../features/register/types/ColumnType";

const useStore = create<StoreInterface>((set) => ({
  theme: localStorage.getItem("themeMode") || "light",

  toggleTheme: () => {
    set((state: StoreInterface) => {
      const nextTheme: ThemeType = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", nextTheme);

      return { theme: nextTheme };
    });
  },

  saveInServer: async (id: Id, columnOrder: ColumnType[]) => {
    try {
      const res = await fetch(`http://localhost:3000/boards/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: columnOrder }),
      });

      if (!res.ok) {
        throw new Error("Ошибка при сохранении колонок");
      }
    } catch (error) {
      console.error("❌ Ошибка сохранения:", error);
    }
  },
}));

export default useStore;
