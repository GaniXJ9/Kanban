import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";

export type ThemeType = "light" | "dark";

export interface UserType {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  token: string;
}

export interface StoreInterface {
  currentUser: null | UserType;
  theme: string | ThemeType;
  toggleTheme: () => void;
  getCurrentUser: (data: SingInInterface) => void;
}
