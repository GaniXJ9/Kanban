import type { BoardEntity } from "../boards/board-entity";

export interface UserEntity {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
  boards: BoardEntity[];
}
