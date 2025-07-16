import { create } from "zustand";
import type { BoardType } from "../../../features/register/types/BoardType";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { Id } from "../StoreInterface";
import type { ColumnStoreInterface } from "../type/ColumnStoreInterface";

const useColumnStore = create<ColumnStoreInterface>((set) => ({
  currentBoard: null,

  addColumn: async (currentBoard: BoardType, newColumnList: ColumnType[]) => {
    try {
      const updatedBoard = {
        ...currentBoard,
        columns: newColumnList,
      };

      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBoard),
        }
      );

      if (res.ok) {
        set({ currentBoard: updatedBoard });
        console.log("Column added successfully");
      } else {
        console.log("Failed to add column");
      }
    } catch (e) {
      console.error("Add column error:", e);
    }
  },
  deleteColumn: async (currentBoard: BoardType, columnId: Id) => {
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
  setCurrentBoard: (board: BoardType | null) => set({ currentBoard: board }),
  updateColumnOrder: (newColumns: ColumnType[]) =>
    set((state) => ({
      currentBoard: state.currentBoard
        ? { ...state.currentBoard, columns: newColumns }
        : null,
    })),
}));

export default useColumnStore;
