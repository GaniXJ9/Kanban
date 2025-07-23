import type { Id } from "../../../shared/type/IdType";
import type { TaskEntity } from "../tasks/TaskEntity";

export interface ColumnEntity {
  id: Id;
  name: string;
  tasks: TaskEntity[];
}
