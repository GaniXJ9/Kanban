import type { BoardType } from "../../../features/register/types/BoardType";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { CommentType } from "../../../features/register/types/CommentType";
import type { TaskType } from "../../../features/register/types/TaskType";
import type { Id } from "../../../shared/type/IdType";

export interface BoardStoreInterface {
  currentBoard: null | BoardType;
  currentTask: null | TaskType;
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
  updateTask: (
    columnId: Id,
    taskId: Id,
    newTitle: string,
    currentBoard: BoardType
  ) => void;
  updateTaskOrder: (newColumns: ColumnType[]) => void;
  setCurrentTask: (task: TaskType | null) => void;
  addComment: (comment: CommentType, currentBoardId: Id) => void;
}
