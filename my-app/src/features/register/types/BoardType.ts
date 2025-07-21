import type { Id } from "../../../shared/type/IdType";
import type { ColumnType } from "./ColumnType";

export interface BoardType {
  id: Id;
  title: string;
  background: string;
  user: string;
  columns: ColumnType[];
}
