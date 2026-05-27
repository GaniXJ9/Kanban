import type { Id } from "../../../shared/type/";
import type { BoardEntity } from "../boards/board-entity";
import type { ColumnEntity } from "../columns/column-entity";
import type { TaskEntity } from "./task-entity";

export interface Tasks {
  tasks: TaskEntity[];
  loading: boolean;
  taskLoadId: Id | null;
  filteredTasks: TaskEntity[];
  currentTask: TaskEntity | null;
  setTasks: (tasks: TaskEntity[]) => void;
  setCurrentTask: (task: TaskEntity | null) => void;
  filterTask: (searchQuery: string) => void;
  getTasks: (board: BoardEntity) => void;
  addTask: (
    task: TaskEntity,
    column: ColumnEntity,
    currentBoard: BoardEntity,
  ) => void;
  deleteTask: (id: Id, column: ColumnEntity, currentBoard: BoardEntity) => void;
  updateTitle: (
    task: TaskEntity,
    newName: string,
    column: ColumnEntity,
    currentBoard: BoardEntity,
  ) => void;
  updateDescription: (
    task: TaskEntity,
    value: string,
    column: ColumnEntity,
    currentBoard: BoardEntity,
  ) => void;
  updateTaskOrder: (
    newOrder: ColumnEntity[],
    currentBoard: BoardEntity,
  ) => void;
  setImportance: (
    value: string,
    task: TaskEntity,
    column: ColumnEntity,
    currentBoard: BoardEntity,
  ) => void;
}
