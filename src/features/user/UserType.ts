import type { BoardType } from "../register/types/BoardType";

export interface UserType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
  boards: BoardType[];
}
