import type { ColumnType } from "../../features/register/types/ColumnType";

export type ThemeType = "light" | "dark";
export type Id = number | string;

export interface StoreInterface {
  theme: string | ThemeType;
  toggleTheme: () => void;
  saveInServer: (id: Id, columnOrder: ColumnType[]) => void;
}
