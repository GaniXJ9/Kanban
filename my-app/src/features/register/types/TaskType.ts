import type { Id } from "../../../shared/type/IdType";
import type { CommentType } from "./CommentType";

export interface TaskType {
  id: Id;
  taskTitle: string;
  date: string;
  comments: CommentType[];
  background?: null;
}
