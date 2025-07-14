import type { SingInInterface } from "../../../features/sing-in/types/SingInInterface";
import type { UserType } from "../../../features/user/UserType";

export interface UserStoreInterface {
  currentUser: null | UserType;
  confirmData: (data: SingInInterface) => void;
  setCurrentUser: (user: UserType) => void;
}
