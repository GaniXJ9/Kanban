import type { Id } from "../../../shared/type/";
import type { TaskEntity } from "../tasks/task-entity";

export interface ColumnEntity {
  id: Id;
  name: string;
  tasks: TaskEntity[];
}
