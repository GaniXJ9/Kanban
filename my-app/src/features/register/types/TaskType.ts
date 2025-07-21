import type { Id } from "../../../shared/type/IdType";

export interface TaskType {
  id: Id;
  taskTitle: string;
  date: string;
  comments: [];
  background?: null;
}
