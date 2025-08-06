import { create } from "zustand";
import type { Id } from "../../../shared/type/IdType";
import type { Boards } from "../../../features/types/boards/Boards";
import type { BoardEntity } from "../../../features/types/boards/BoardEntity";
import { BOARDS_URL } from "../../api";

const useBoards = create<Boards>((set) => ({
  loading: false,
  loadingId: null,
  boards: [],
  currentBoard: null,
  setUserBoards: async (userToken: string) => {
    try {
      set({ loading: true });

      const response = await fetch(BOARDS_URL);
      const data: BoardEntity[] = await response.json();

      if (response.ok) {
        set({
          boards: data.filter((board) => board.userToken === userToken),
        });
        set({ loading: false });
      }
    } catch (e) {
      console.log(e);
    }
  },
  createBoard: async (board: BoardEntity) => {
    try {
      set({ loadingId: board.id });
      const boardResponse = await fetch(BOARDS_URL, {
        method: "POST",
        body: JSON.stringify(board),
      });

      if (boardResponse.ok) {
        set({ loadingId: null });
      }
    } catch (e) {
      console.log(e);
    }
  },
  getBoard: async (id: Id) => {
    try {
      set({ loadingId: id });
      const response = await fetch(`${BOARDS_URL}/${id}`);
      const boardData = await response.json();

      if (response.ok) {
        set({ loadingId: null });
        set({ currentBoard: boardData });
      }
    } catch (e) {
      console.log(e);
    }
  },
  deleteBoard: async (id: Id) => {
    try {
      const response = await fetch(`${BOARDS_URL}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        set(() => ({ loadingId: null }));
      }
    } catch (e) {
      console.log(e);
    }
  },
  updateName: async (id: Id, newValue: string) => {
    try {
      set(() => ({ loadingId: id }));

      const response = await fetch(`${BOARDS_URL}/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ name: newValue }),
      });
      if (response.ok) {
        set(() => ({ loadingId: null }));
      }
    } catch (e) {
      console.log(e);
    }
  },
  setCurrentBoard: (board: BoardEntity | null) => set({ currentBoard: board }),
}));

export default useBoards;
