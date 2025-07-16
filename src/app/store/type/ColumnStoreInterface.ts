import type { BoardType } from "../../../features/register/types/BoardType";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { Id } from "../StoreInterface";

export interface ColumnStoreInterface {
  currentBoard: null | BoardType;
  setCurrentBoard: (board: BoardType | null) => void;
  updateColumnOrder: (newColumns: ColumnType[]) => void;
  addColumn: (currentBoard: BoardType, newColumnList: ColumnType[]) => void;
  deleteColumn: (currentBoard: BoardType, columnId: Id) => void;
}
