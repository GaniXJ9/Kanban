import { create } from "zustand";
import type { StoreInterface, ThemeType, UserType } from "./StoreInterface";
import getUsers from "../../shared/users/getUsers";
import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";

const useStore = create<StoreInterface>((set) => ({
  theme: localStorage.getItem("themeMode") || "light",
  currentUser: JSON.parse(localStorage.getItem("currentUser") as string),
  toggleTheme: () => {
    set((state: StoreInterface) => {
      const nextTheme: ThemeType = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", nextTheme);

      return { theme: nextTheme };
    });
  },
  confirmData: async (data: SingInInterface) => {
    const users = await getUsers();
    const loggedUser = users.find(
      (user: UserType) => user.email === data.email
    );

    if (loggedUser) {
      localStorage.setItem("currentUser", JSON.stringify(loggedUser));
      set({ currentUser: loggedUser });
    } else {
      set({ currentUser: null });
    }
  },
}));

export default useStore;
