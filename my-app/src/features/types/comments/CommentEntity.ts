import type { Id } from "../../../shared/type/IdType";
import type { UserEntity } from "../users/UserEntity";

export interface CommentEntity {
  id: Id;
  user: UserEntity;
  text: string | null;
  date: Date;
}
