export type ThemeType = "light" | "dark";

export interface Store {
  theme: string | ThemeType;
  toggleTheme: () => void;
}
