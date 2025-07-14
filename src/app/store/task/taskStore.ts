import { create } from "zustand";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { BoardType } from "../../../features/register/types/BoardType";
import type { TaskType } from "../../../features/register/types/TaskType";
import type { Id } from "../StoreInterface";
import type { TaskStoreInterface } from "../type/TaskStoreInterface";

const useTaskStore = create<TaskStoreInterface>(() => ({
  addTask: async (title: string, currentBoard: BoardType, columnId: Id) => {
    ///НУЖНО ЕЩЕ РАЗ ПОСМОТРЕТЬ
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

      const response = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ columns: updatedColumns }),
        }
      );

      if (!response.ok) throw new Error("Failed to update board");

      const updatedBoard = await response.json();
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
    const updatedColumnList = currentBoard?.columns.map((col) =>
      col.id === column.id ? updatedColumn : col
    );

    try {
      const res = await fetch(
        `http://localhost:3000/boards/${currentBoard?.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: updatedColumnList }),
        }
      );

      if (res.ok) {
        return "+++";
      }
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useTaskStore;
