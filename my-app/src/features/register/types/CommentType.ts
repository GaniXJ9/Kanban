import type { Id } from "../../../shared/type/IdType";
import type { UserType } from "../../user/UserType";

export interface CommentType {
  id: Id;
  taskId: Id;
  commentText: string;
  commentDate: Date;
  user: UserType;
}
