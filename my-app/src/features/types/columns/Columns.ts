import type { Id } from "../../../shared/type/IdType";
import type { BoardEntity } from "../boards/BoardEntity";
import type { ColumnEntity } from "./ColumnEntity";

export interface Columns {
  columns: ColumnEntity[];
  currentColumn: ColumnEntity | null;
  setColumns: (list: ColumnEntity[]) => void;
  addColumn: (column: ColumnEntity, currentBoard: BoardEntity) => void;
  deleteColumn: (columnId: Id, currentBoard: BoardEntity) => void;
  updateColumn: (
    currentBoard: BoardEntity,
    column: ColumnEntity,
    newTitle: string
  ) => void;
  updateColumnOrder: (newColumnOrder: ColumnEntity[]) => void;
}
