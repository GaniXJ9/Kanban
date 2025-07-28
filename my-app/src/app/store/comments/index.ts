import { create } from "zustand";
import type { CommentEntity } from "../../../features/types/comments/CommentEntity";
import { BOARDS_URL } from "../../api";
import type { BoardEntity } from "../../../features/types/boards/BoardEntity";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useBoards from "../boards";
import useTasks from "../tasks";
import type { Id } from "../../../shared/type/IdType";

interface Comments {
  addComment: (
    currentBoard: BoardEntity,
    column: ColumnEntity,
    task: TaskEntity,
    newComment: CommentEntity
  ) => void;
  deleteComment: (
    currentBoard: BoardEntity,
    column: ColumnEntity,
    task: TaskEntity,
    commentId: Id
  ) => void;
}

const useComments = create<Comments>(() => ({
  addComment: async (
    currentBoard: BoardEntity,
    column: ColumnEntity,
    task: TaskEntity,
    newComment: CommentEntity
  ) => {
    const updatedComments = [...task.comments, newComment];
    const updatedTask = { ...task, comments: updatedComments };

    const updatedTasks = column.tasks.map((t) =>
      t.id === task.id ? updatedTask : t
    );
    const updatedColumn = { ...column, tasks: updatedTasks };

    const updatedColumns: ColumnEntity[] = currentBoard.columns.map((col) =>
      col.id === column.id ? updatedColumn : col
    );

    try {
      const response = await fetch(`${BOARDS_URL}/${currentBoard.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: updatedColumns }),
      });

      if (response.ok) {
        const newBoard = { ...currentBoard, columns: updatedColumns };
        useBoards.getState().setCurrentBoard(newBoard);
        useTasks.getState().setCurrentTask(updatedTask);
      }
    } catch (e) {
      console.log(e);
    }
  },

  deleteComment: async (
    currentBoard: BoardEntity,
    column: ColumnEntity,
    task: TaskEntity,
    commentId: Id
  ) => {
    const updatedComments = task.comments.filter((c) => c.id !== commentId);
    const updatedTask = { ...task, comments: updatedComments };

    const updatedTasks = column.tasks.map((t) =>
      t.id === task.id ? updatedTask : t
    );
    const updatedColumn = { ...column, tasks: updatedTasks };

    const updatedColumns: ColumnEntity[] = currentBoard.columns.map((col) =>
      col.id === column.id ? updatedColumn : col
    );

    try {
      const response = await fetch(`${BOARDS_URL}/${currentBoard.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ columns: updatedColumns }),
      });

      if (response.ok) {
        const newBoard = { ...currentBoard, columns: updatedColumns };
        useBoards.getState().setCurrentBoard(newBoard);
        useTasks.getState().setCurrentTask(updatedTask);
      }
    } catch (e) {
      console.log(e);
    }
  },
}));

export default useComments;
