export type ThemeType = "light" | "dark";

export interface StoreInterface {
  theme: string | ThemeType;
}
