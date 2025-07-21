import { create } from "zustand";
import type { StoreInterface, ThemeType } from "./StoreInterface";

const useStore = create<StoreInterface>((set) => ({
  theme: localStorage.getItem("themeMode") || "light",

  toggleTheme: () => {
    set((state: StoreInterface) => {
      const nextTheme: ThemeType = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", nextTheme);

      return { theme: nextTheme };
    });
  },

  // saveInServer: async (id: Id, columnOrder: ColumnType[]) => {
  //   try {
  //     const resolve = await fetch(`http://localhost:3000/boards/${id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ columns: columnOrder }),
  //     });

  //     if (resolve.ok) {
  //      console.log(Save)
  //     }
  //   } catch (error) {
  //     console.error("❌ Ошибка сохранения:", error);
  //   }
  // },
}));

export default useStore;
