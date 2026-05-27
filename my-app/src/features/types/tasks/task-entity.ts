import type { Id } from "../../../shared/type/";
import type { CommentEntity } from "../comments/comment-entity";

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
