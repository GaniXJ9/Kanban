// import type { ColumnType } from "../../features/register/types/ColumnType";

export type ThemeType = "light" | "dark";

export interface StoreInterface {
  theme: string | ThemeType;
  toggleTheme: () => void;
  // saveInServer: (id: Id, columnOrder: ColumnType[]) => void;
}
