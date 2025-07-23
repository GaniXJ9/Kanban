import { create } from "zustand";
import type { Id } from "../../../shared/type/IdType";
import type { Boards } from "../../../features/types/boards/Boards";
import type { BoardEntity } from "../../../features/types/boards/BoardEntity";

const useBoards = create<Boards>((set) => ({
  boards: [],
  currentBoard: null,
  setUserBoards: async (userToken: string) => {
    try {
      const response = await fetch("http://localhost:3000/boards");
      const data: BoardEntity[] = await response.json();

      set({
        boards: data.filter((board) => board.userToken === userToken),
      });
    } catch (e) {
      console.log(e);
    }
  },
  createBoard: async (board: BoardEntity) => {
    try {
      const boardResponse = await fetch("http://localhost:3000/boards", {
        method: "POST",
        body: JSON.stringify(board),
      });

      if (boardResponse.ok) {
        console.log("Board added");
      }
    } catch (e) {
      console.log(e);
    }
  },
  getBoard: async (id: Id) => {
    try {
      const res = await fetch(`http://localhost:3000/boards/${id}`);
      const boardData = await res.json();
      set({ currentBoard: boardData });
    } catch (e) {
      console.log(e);
    }
  },
  deleteBoard: async (id: Id) => {
    try {
      const response = await fetch(`http://localhost:3000/boards/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Deleted");
      }
    } catch (e) {
      console.log(e);
    }
  },
  setCurrentBoard: (board: BoardEntity | null) => set({ currentBoard: board }),
}));

export default useBoards;
