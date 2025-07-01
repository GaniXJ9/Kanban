import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";
import type { UserType } from "../../features/user/UserType";

export type ThemeType = "light" | "dark";

export interface StoreInterface {
  currentUser: null | UserType;
  theme: string | ThemeType;
  toggleTheme: () => void;
  confirmData: (data: SingInInterface) => void;
}
