// import type { BoardType } from "../../features/register/types/BoardType";
import type { ColumnType } from "../../features/register/types/ColumnType";
// import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";
// import type { UserType } from "../../features/user/UserType";

export type ThemeType = "light" | "dark";
export type Id = number | string;

export interface StoreInterface {
  theme: string | ThemeType;
  // currentUser: null | UserType;
  // currentBoard: null | BoardType;

  toggleTheme: () => void;
  // confirmData: (data: SingInInterface) => void;
  // getBoard: (id: string) => void;
  // setCurrentBoard: (board: BoardType | null) => void;
  // setCurrentUser: (user: UserType) => void;
  // updateColumnOrder: (newColumns: ColumnType[]) => void;
  // deleteBoard: (id: string) => void;
  // addColumn: (currentBoard: BoardType, newColumnList: ColumnType[]) => void;
  // deleteColumn: (currentBoard: BoardType, columnId: number) => void;
  // addTask: (title: string, currentBoard: BoardType, id: Id) => void;
  // deleteTask: (
  //   column: ColumnType,
  //   taskId: number,
  //   currentBoard: BoardType
  // ) => void;
  saveInServer: (id: Id, columnOrder: ColumnType[]) => void;
}
