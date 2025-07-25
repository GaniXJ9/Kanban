import type { Id } from "../../../shared/type/IdType";
import type { CommentEntity } from "../comments/CommentEntity";

type Importance =
  | "оptionaly"
  | "Not urgent, but necessary"
  | "Important"
  | "Hight Priorety";

export interface TaskEntity {
  id: Id;
  name: string;
  date: number;
  deadline: number | null;
  description: string | null;
  importance: Importance | null;
  comments: CommentEntity[];
  background: string | null;
}
