import { create } from "zustand";
import type { StoreInterface, ThemeType } from "./StoreInterface";
import getUsers from "../../shared/users/getUsers";
import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";
import type { UserType } from "../../features/user/UserType";
import type {
  BoardType,
  ColumnType,
} from "../../features/register/types/BoardType";

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
  deleteBoard: async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/boards/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        console.log("Удалено");
      }
    } catch (e) {
      console.log(e);
    }
  },

  addColumn: async (currentBoard: BoardType, newColumnList: ColumnType[]) => {
    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PUT", // или PATCH, если не отправляешь всю доску
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...currentBoard,
            columns: newColumnList,
          }),
        }
      );

      if (res.ok) {
        console.log("Успещно");
      } else {
        console.log("Ошибка при добавлении");
      }
    } catch (e) {
      console.error("Ошибка:", e);
    }
  },
  deleteColumn: async (currentBoard: BoardType, columnId: number) => {
    const updatedColumns = currentBoard?.columns.filter(
      (column) => column.id !== columnId
    );

    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard?.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: updatedColumns }),
        }
      );
      if (res.ok) {
        console.log("Удалено");
      }
    } catch (e) {
      console.log(e);
    }
  },
  setCurrentUser: (user: UserType) => set({ currentUser: user }),
  setCurrentBoard: (board: BoardType | null) => set({ currentBoard: board }),
}));

export default useStore;
