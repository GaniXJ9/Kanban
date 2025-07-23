import type { SignInForm } from "../../sing-in/schema";
import type { UserEntity } from "./UserEntity";

export interface Users {
  currentUser: UserEntity | null;
  confirmData: (data: SignInForm) => void;
  setCurrentUser: (user: UserEntity) => void;
}
