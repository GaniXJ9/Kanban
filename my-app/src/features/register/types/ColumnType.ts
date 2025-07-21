import type { Id } from "../../../shared/type/IdType";
import type { TaskType } from "./TaskType";

export interface ColumnType {
  id: Id;
  columnName: string;
  taskList: TaskType[];
}
