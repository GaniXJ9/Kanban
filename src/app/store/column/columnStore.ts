import { create } from "zustand";
import type { BoardType } from "../../../features/register/types/BoardType";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { Id } from "../StoreInterface";
import type { ColumnStoreInterface } from "../type/ColumnStoreInterface";

const useColumnStore = create<ColumnStoreInterface>((set) => ({
  currentBoard: null,
  addColumn: async (currentBoard: BoardType, newColumnList: ColumnType[]) => {
    try {
      const res = await fetch(`/api/boards/${currentBoard.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentBoard,
          columns: newColumnList,
        }),
      });

      if (res.ok) {
        console.log("Success");
      } else {
        console.log("Error");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  },

  deleteColumn: async (currentBoard: BoardType, columnId: Id) => {
    const updatedColumns = currentBoard?.columns.filter(
      (column) => column.id !== columnId
    );

    try {
      const res = await fetch(`/api/boards/${currentBoard?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: updatedColumns }),
      });
      if (res.ok) {
        console.log("Удалено");
      }
    } catch (e) {
      console.log(e);
    }
  },
  setCurrentBoard: (board: BoardType | null) => set({ currentBoard: board }),
  updateColumnOrder: (newColumns: ColumnType[]) =>
    set((state) => ({
      currentBoard: state.currentBoard
        ? { ...state.currentBoard, columns: newColumns }
        : null,
    })),
}));

export default useColumnStore;
