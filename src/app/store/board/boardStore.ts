import { create } from "zustand";
import type { BoardType } from "../../../features/register/types/BoardType";

type Id = number | string;

interface BoardStoreInterface {
  currentBoard: null | BoardType;
  getBoard: (id: Id) => void;
  setCurrentBoard: (board: BoardType | null) => void;
  deleteBoard: (id: Id) => void;
}

const useBoardStore = create<BoardStoreInterface>((set) => ({
  currentBoard: null,
  getBoard: async (id: Id) => {
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
  deleteBoard: async (id: Id) => {
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
  setCurrentBoard: (board: BoardType | null) => set({ currentBoard: board }),
}));

export default useBoardStore;
