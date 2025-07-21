import type { BoardType } from "../../../features/register/types/BoardType";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { Id } from "../../../shared/type/IdType";

export interface BoardStoreInterface {
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
  updateTask: (
    columnId: Id,
    taskId: Id,
    newTitle: string,
    currentBoard: BoardType
  ) => void;
  updateTaskOrder: (newColumns: ColumnType[]) => void;
}
