import type { Id } from "../../../shared/type/";
import type { UserEntity } from "../users/user-entity";

export interface CommentEntity {
  id: Id;
  user: UserEntity;
  text: string | null;
  date: Date;
}
