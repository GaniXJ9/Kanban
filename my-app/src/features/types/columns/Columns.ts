import type { Id } from "../../../shared/type/IdType";
import type { BoardEntity } from "../boards/BoardEntity";
import type { ColumnEntity } from "./ColumnEntity";

export interface Columns {
  loading: boolean;
  columnLoadId: Id | null;
  columns: ColumnEntity[];
  currentColumn: ColumnEntity | null;
  setColumns: (list: ColumnEntity[]) => void;
  setCurrentColumn: (column: ColumnEntity | null) => void;
  addColumn: (column: ColumnEntity, currentBoard: BoardEntity) => void;
  deleteColumn: (id: Id, currentBoard: BoardEntity) => void;
  updateColumn: (
    currentBoard: BoardEntity,
    column: ColumnEntity,
    newTitle: string
  ) => void;
  updateColumnOrder: (newColumnOrder: ColumnEntity[]) => void;
}
