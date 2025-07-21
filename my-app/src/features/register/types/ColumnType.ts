import type { Id } from "../../../shared/type/IdType";

export interface ColumnType {
  id: Id;
  columnName: string;
  taskList: any;
}
