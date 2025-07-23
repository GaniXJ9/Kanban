import type { BoardEntity } from "../boards/BoardEntity";

export interface UserEntity {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
  boards: BoardEntity[];
}
