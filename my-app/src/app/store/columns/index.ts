import { create } from "zustand";
import type { Id } from "../../../shared/type/IdType";
import type { BoardEntity } from "../../../features/types/boards/BoardEntity";
import type { Columns } from "../../../features/types/columns/Columns";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useBoards from "../boards";

const useColumns = create<Columns>((set) => ({
  columns: [],
  currentColumn: null,

  setColumns: (list: ColumnEntity[]) => {
    set(() => ({ columns: [...list] }));
  },

  addColumn: async (column: ColumnEntity, currentBoard: BoardEntity) => {
    const updatedColumnList = [...currentBoard.columns, column];

    try {
      const response = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ columns: updatedColumnList }),
        }
      );

      if (response.ok) {
        const newBoard = { ...currentBoard, columns: updatedColumnList };
        set(() => ({ columns: updatedColumnList }));
        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.log(e);
    }
  },
  deleteColumn: async (columnId: Id, currentBoard: BoardEntity) => {
    const updatedColumnList = currentBoard.columns.filter(
      (column) => column.id !== columnId
    );
    try {
      const response = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ columns: updatedColumnList }),
        }
      );
      if (response.ok) {
        const newBoard = { ...currentBoard, columns: updatedColumnList };
        set(() => ({ columns: updatedColumnList }));
        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.log(e);
    }
  },
  updateColumn: async (
    currentBoard: BoardEntity,
    column: ColumnEntity,
    newTitle: string
  ) => {
    const updatedColumn = { ...column, name: newTitle };
    const updatedColumnList = currentBoard.columns.map((col) =>
      col.id === column.id ? updatedColumn : col
    );

    try {
      const response = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: updatedColumnList }),
        }
      );

      if (response.ok) {
        const newBoard = { ...currentBoard, columns: updatedColumnList };
        set(() => ({ columns: updatedColumnList }));
        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.error(e);
    }
  },
  updateColumnOrder: async (newColumnOrder: ColumnEntity[]) => {
    const currentBoard = useBoards.getState().currentBoard;

    if (!currentBoard) return;

    try {
      const response = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: newColumnOrder }),
        }
      );

      if (response.ok) {
        const updatedBoard = { ...currentBoard, columns: newColumnOrder };
        set({ columns: newColumnOrder });
        useBoards.getState().setCurrentBoard(updatedBoard);
      }
    } catch (e) {
      console.error(e);
    }
  },
}));

export default useColumns;
