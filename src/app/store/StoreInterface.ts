import type { BoardType } from "../../features/register/types/BoardType";
import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";
import type { UserType } from "../../features/user/UserType";

export type ThemeType = "light" | "dark";

export interface StoreInterface {
  currentUser: null | UserType;
  currentBoard: null | BoardType;
  theme: string | ThemeType;
  toggleTheme: () => void;
  confirmData: (data: SingInInterface) => void;
  getBoard: (id: string) => void;
  setCurrentBoard: (board: BoardType | null) => void;
  setCurrentUser: (user: UserType) => void;
}
