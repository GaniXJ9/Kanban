import type { ColumnType } from "./ColumnType";

type Id = number | string;

export interface BoardType {
  id: Id;
  title: string;
  background: string;
  user: string;
  columns: ColumnType[];
}
