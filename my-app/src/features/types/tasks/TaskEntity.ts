import type { Id } from "../../../shared/type/IdType";
import type { CommentEntity } from "../comments/CommentEntity";

export interface TaskEntity {
  id: Id;
  name: string;
  date: number;
  comments: CommentEntity[];
  background: string | null;
}
