import { create } from "zustand";
import type { StoreInterface, ThemeType } from "./StoreInterface";
import getUsers from "../../shared/users/getUsers";
import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";
import type { UserType } from "../../features/user/UserType";
import type { BoardType } from "../../features/register/types/BoardType";

const useStore = create<StoreInterface>((set) => ({
  theme: localStorage.getItem("themeMode") || "light",
  currentBoard: null,
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
  getBoard: async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/boards/${id}`);
      const boardData = await res.json();
      set({ currentBoard: boardData });
      return boardData;
    } catch (e) {
      console.error("Failed to fetch board:", e);
      return null;
    }
  },

  setCurrentUser: (user: UserType) => set({ currentUser: user }),
  setCurrentBoard: (board: BoardType) => set({ currentBoard: board }),
}));

export default useStore;
