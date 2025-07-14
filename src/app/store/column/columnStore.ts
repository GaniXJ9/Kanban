import { create } from "zustand";
import type { BoardType } from "../../../features/register/types/BoardType";
import type { ColumnType } from "../../../features/register/types/ColumnType";

interface ColumnStoreInterface {
  currentBoard: null | BoardType;
  setCurrentBoard: (board: BoardType | null) => void;
  updateColumnOrder: (newColumns: ColumnType[]) => void;
  addColumn: (currentBoard: BoardType, newColumnList: ColumnType[]) => void;
  deleteColumn: (currentBoard: BoardType, columnId: number) => void;
}

const useColumnStore = create<ColumnStoreInterface>((set) => ({
  currentBoard: null,
  addColumn: async (currentBoard: BoardType, newColumnList: ColumnType[]) => {
    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PUT",
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
  updateColumnOrder: (newColumns: ColumnType[]) =>
    set((state) => ({
      currentBoard: state.currentBoard
        ? { ...state.currentBoard, columns: newColumns }
        : null,
    })),
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
  setCurrentBoard: (board: BoardType | null) => set({ currentBoard: board }),
}));

export default useColumnStore;
