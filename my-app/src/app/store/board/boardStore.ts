import { create } from "zustand";
import type { BoardType } from "../../../features/register/types/BoardType";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { Id } from "../StoreInterface";
import type { TaskType } from "../../../features/register/types/TaskType";

interface BoardStoreInterface {
  currentBoard: null | BoardType;
  getBoard: (id: Id) => Promise<void>;
  setCurrentBoard: (board: BoardType | null) => void;
  deleteBoard: (id: Id) => void;
  addColumn: (newColumn: ColumnType) => Promise<void>;
  updateColumn: (
    id: Id,
    currentBoard: BoardType,
    newColumn: ColumnType
  ) => void;
  deleteColumn: (columnId: Id) => Promise<void>;
  updateColumnOrder: (newColumns: ColumnType[]) => void;
  addTask: (title: string, currentBoard: BoardType, id: Id) => void;
  deleteTask: (column: ColumnType, taskId: Id, currentBoard: BoardType) => void;
  updateTaskOrder: (newColumns: ColumnType[]) => void;
}

const useBoardStore = create<BoardStoreInterface>((set, get) => ({
  currentBoard: null,
  getBoard: async (id: Id) => {
    try {
      const res = await fetch(`http://localhost:3000/boards/${id}`);
      const boardData = await res.json();
      set({ currentBoard: boardData });
    } catch (e) {
      console.error("Failed to fetch board:", e);
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

  addColumn: async (newColumn: ColumnType) => {
    const { currentBoard } = get();
    if (!currentBoard) return;

    const updatedColumns = [...currentBoard.columns, newColumn];
    const updatedBoard = { ...currentBoard, columns: updatedColumns };

    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ columns: updatedColumns }),
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

  deleteColumn: async (columnId: Id) => {
    const { currentBoard } = get();
    if (!currentBoard) return;

    const updatedColumns = currentBoard.columns.filter(
      (col) => col.id !== columnId
    );
    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ columns: updatedColumns }),
        }
      );

      if (res.ok) {
        set({ currentBoard: { ...currentBoard, columns: updatedColumns } });
        console.log("Column deleted");
      }
    } catch (e) {
      console.log(e);
    }
  },
  updateColumn: async (
    id: Id,
    currentBoard: BoardType,
    newColumn: ColumnType
  ) => {
    try {
      const updatedColumns = currentBoard.columns.map((column) =>
        column.id === id ? newColumn : column
      );

      const updatedBoard = { ...currentBoard, columns: updatedColumns };

      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: updatedColumns }),
        }
      );

      if (!res.ok) throw new Error("Failed to update column");

      set({ currentBoard: updatedBoard });

      console.log(" Column updated ");
    } catch (e) {
      console.error(e);
    }
  },
  updateColumnOrder: async (newColumns: ColumnType[]) => {
    const { currentBoard } = get();
    if (!currentBoard) return;

    const updatedBoard = {
      ...currentBoard,
      columns: newColumns,
    };

    set({ currentBoard: updatedBoard });

    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: newColumns }),
        }
      );

      if (!res.ok) {
        throw new Error("Ошибка при сохранении порядка колонок");
      }

      console.log(" сохранён на сервере");
    } catch (error) {
      console.error(" Ошибка ", error);
    }
  },

  addTask: async (title: string, currentBoard: BoardType, columnId: Id) => {
    try {
      const columnIndex = currentBoard.columns.findIndex(
        (col) => col.id === columnId
      );
      const newTask: TaskType = {
        id: Date.now(),
        date: Date.now().toString(),
        taskTitle: title,
        comments: [],
        background: null,
      };
      const column = currentBoard.columns[columnIndex];
      const updatedTaskList = column.taskList
        ? [...column.taskList, newTask]
        : [newTask];
      const updatedColumn = {
        ...column,
        taskList: updatedTaskList,
      };
      const updatedColumns = [...currentBoard.columns];
      updatedColumns[columnIndex] = updatedColumn;

      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ columns: updatedColumns }),
        }
      );

      if (!res.ok) throw new Error("Failed to update board");

      const updatedBoard = await res.json();

      set({ currentBoard: updatedBoard });

      console.log("Updated board:", updatedBoard);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  },
  deleteTask: async (
    column: ColumnType,
    taskId: Id,
    currentBoard: BoardType
  ) => {
    const updatedTaskList = column.taskList.filter(
      (task: TaskType) => task.id !== taskId
    );
    const updatedColumn = { ...column, taskList: updatedTaskList };
    const updatedColumnList = currentBoard.columns.map((col) =>
      col.id === column.id ? updatedColumn : col
    );

    const updatedBoard: BoardType = {
      ...currentBoard,
      columns: updatedColumnList,
    };

    set({ currentBoard: updatedBoard });

    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: updatedColumnList }),
        }
      );

      if (!res.ok) throw new Error("Failed to delete task");

      console.log(" Task deleted & saved on server");
    } catch (e) {
      console.error(" Error deleting task:", e);
    }
  },
  updateTaskOrder: async (newColumns: ColumnType[]) => {
    const { currentBoard } = get();
    if (!currentBoard) return;

    const updatedBoard: BoardType = {
      ...currentBoard,
      columns: newColumns,
    };

    // 🟢 Сначала локально обновляем Zustand
    set({ currentBoard: updatedBoard });

    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: newColumns }),
        }
      );

      if (!res.ok) throw new Error("Ошибка при сохранении тасков");

      console.log("✅ Порядок тасков успешно сохранён на сервере");
    } catch (error) {
      console.error("❌ Ошибка сохранения тасков:", error);
    }
  },
}));

export default useBoardStore;
