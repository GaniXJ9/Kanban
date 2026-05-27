import type { Id } from "../../../shared/type/";
import type { ColumnEntity } from "../columns/column-entity";

export interface BoardEntity {
  id: Id;
  name: string;
  background: string;
  userToken: string;
  columns: ColumnEntity[];
}
