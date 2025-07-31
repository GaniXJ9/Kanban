import type { Id } from "../../../shared/type/IdType";
import type { ColumnEntity } from "../columns/ColumnEntity";

export interface BoardEntity {
  id: Id;
  name: string;
  background: string;
  userToken: string;
  columns: ColumnEntity[];
}
