import type { BoardType } from "../../../features/register/types/BoardType";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { Id } from "../StoreInterface";

export interface TaskStoreInterface {
  addTask: (title: string, currentBoard: BoardType, id: Id) => void;
  deleteTask: (column: ColumnType, taskId: Id, currentBoard: BoardType) => void;
}
