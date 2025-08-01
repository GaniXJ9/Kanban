import { create } from "zustand";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";
import type { BoardEntity } from "../../../features/types/boards/BoardEntity";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useBoards from "../../store/boards";
import type { Id } from "../../../shared/type/IdType";
import type { Tasks } from "../../../features/types/tasks/Tasks";
import { BOARDS_URL } from "../../api";

const useTasks = create<Tasks>((set) => ({
  tasks: [],
  filteredTasks: [],
  currentTask: null,
  setTasks: (tasks: TaskEntity[]) => {
    set({ tasks });
  },
  setCurrentTask: (task: TaskEntity | null) => {
    set({ currentTask: task });
  },
  filterTask: (searchQuery: string, tasks: TaskEntity[]) => {
    const filtered = tasks.filter((task) =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    set({ filteredTasks: filtered });
  },
  getTasks: async (currentBoard: BoardEntity) => {
    try {
      const response = await fetch(
        `http://localhost:3000/boards/${currentBoard.id}`
      );
      const data: BoardEntity = await response.json();
      const allTasks: TaskEntity[] = data.columns.flatMap((col) => col.tasks);

      if (response.ok) {
        set(() => ({
          tasks: allTasks,
        }));
      }
    } catch (e) {
      console.log(e);
    }
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
      const response = await fetch(`${BOARDS_URL}/${currentBoard.id}`, {
        method: "PATCH",
        body: JSON.stringify({ columns: updatedColumnList }),
      });

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
      const response = await fetch(`${BOARDS_URL}/${currentBoard.id}`, {
        method: "PATCH",
        body: JSON.stringify({ columns: updatedColumnList }),
      });

      if (response.ok) {
        const newBoard = { ...currentBoard, columns: updatedColumnList };
        set(() => ({ tasks: updatedColumn.tasks }));
        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.log(e);
    }
  },
  updateTitle: async (
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
      const response = await fetch(`${BOARDS_URL}/${currentBoard.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: updatedColumnList }),
      });

      if (response.ok) {
        const newBoard = { ...currentBoard, columns: updatedColumnList };

        set(() => ({ tasks: updatedColumn.tasks }));

        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.error(e);
    }
  },

  updateDescription: async (
    task: TaskEntity,
    newValue: string,
    column: ColumnEntity,
    currentBoard: BoardEntity
  ) => {
    const updatedTask = { ...task, description: newValue };
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
      const response = await fetch(`${BOARDS_URL}/${currentBoard.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: updatedColumnList }),
      });

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
      const response = await fetch(`${BOARDS_URL}/${currentBoard.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: newOrder }),
      });

      if (response.ok) {
        useBoards.getState().setCurrentBoard(updatedBoard);

        const allTasks: TaskEntity[] = newOrder.flatMap((col) => col.tasks);
        set(() => ({ tasks: allTasks }));
      }
    } catch (e) {
      console.error(e);
    }
  },

  setImportance: async (
    value: string,
    task: TaskEntity,
    column: ColumnEntity,
    currentBoard: BoardEntity
  ) => {
    const updatedTask = { ...task, importance: value };
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
      const response = await fetch(`${BOARDS_URL}/${currentBoard.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: updatedColumnList }),
      });

      if (response.ok) {
        const newBoard = { ...currentBoard, columns: updatedColumnList };

        set(() => ({
          tasks: updatedColumn.tasks,
          currentTask: updatedTask,
        }));
        useBoards.getState().setCurrentBoard(newBoard);
      }
    } catch (e) {
      console.error(e);
    }
  },
}));

export default useTasks;
