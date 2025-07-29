import type { Id } from "../../../shared/type/IdType";
import type { CommentEntity } from "../comments/CommentEntity";

export interface TaskEntity {
  id: Id;
  name: string;
  date: number;
  deadline: number | null;
  description: string | null;
  importance: string | null;
  comments: CommentEntity[];
  background: string | null;
}
