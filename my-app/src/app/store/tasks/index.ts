import { create } from "zustand";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";
import type { BoardEntity } from "../../../features/types/boards/BoardEntity";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useBoards from "../../store/boards";
import type { Id } from "../../../shared/type/IdType";
import type { Tasks } from "../../../features/types/tasks/Tasks";

const useTasks = create<Tasks>((set) => ({
  tasks: [],
  currentTask: null,
  setTasks: (tasks: TaskEntity[]) => {
    set({ tasks });
  },
  setCurrentTask: (task: TaskEntity) => {
    set({ currentTask: task });
  },
  addTask: async (
    task: TaskEntity,
    column: ColumnEntity,
    currentBoard: BoardEntity
  ) => {
    const updatedTaskList = [...column.tasks, task];

    const updatedColumn: ColumnEntity = {
      ...column,
      tasks: updatedTaskList,
    };

    const updatedColumnList: ColumnEntity[] = currentBoard.columns.map((col) =>
      col.id === column.id ? updatedColumn : col
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
        set(() => ({ tasks: updatedColumn.tasks }));
        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.log(e);
    }
  },
  deleteTask: async (
    taskId: Id,
    column: ColumnEntity,
    currentBoard: BoardEntity
  ) => {
    const updatedTaskList = column.tasks.filter((task) => task.id !== taskId);
    const updatedColumn: ColumnEntity = {
      ...column,
      tasks: updatedTaskList,
    };

    const updatedColumnList: ColumnEntity[] = currentBoard.columns.map((col) =>
      col.id === column.id ? updatedColumn : col
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
        set(() => ({ tasks: updatedColumn.tasks }));
        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.log(e);
    }
  },
  updateTask: async (
    task: TaskEntity,
    newName: string,
    column: ColumnEntity,
    currentBoard: BoardEntity
  ) => {
    const updatedTask = { ...task, name: newName };
    const updatedTaskList = column.tasks.map((t) =>
      t.id === task.id ? updatedTask : t
    );
    const updatedColumn: ColumnEntity = {
      ...column,
      tasks: updatedTaskList,
    };
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

        set(() => ({ tasks: updatedColumn.tasks }));

        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.error(e);
    }
  },
  updateTaskOrder: async (
    newOrder: ColumnEntity[],
    currentBoard: BoardEntity
  ) => {
    const updatedBoard = { ...currentBoard, columns: newOrder };

    try {
      const response = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ columns: newOrder }),
        }
      );

      if (response.ok) {
        useBoards.getState().setCurrentBoard(updatedBoard);

        const allTasks: TaskEntity[] = newOrder.flatMap((col) => col.tasks);
        set(() => ({ tasks: allTasks }));
      }
    } catch (e) {
      console.error(e);
    }
  },
}));

export default useTasks;
