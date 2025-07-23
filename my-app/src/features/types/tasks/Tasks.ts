import type { Id } from "../../../shared/type/IdType";
import type { BoardEntity } from "../boards/BoardEntity";
import type { ColumnEntity } from "../columns/ColumnEntity";
import type { TaskEntity } from "./TaskEntity";

export interface Tasks {
  tasks: TaskEntity[];
  currentTask: TaskEntity | null;
  setTasks: (tasks: TaskEntity[]) => void;
  setCurrentTask: (task: TaskEntity) => void;
  addTask: (
    task: TaskEntity,
    column: ColumnEntity,
    currentBoard: BoardEntity
  ) => void;
  deleteTask: (
    taskId: Id,
    column: ColumnEntity,
    currentBoard: BoardEntity
  ) => void;
  updateTask: (
    task: TaskEntity,
    newName: string,
    column: ColumnEntity,
    currentBoard: BoardEntity
  ) => void;
  updateTaskOrder: (
    newOrder: ColumnEntity[],
    currentBoard: BoardEntity
  ) => void;
}
