import { create } from "zustand";
import type { Id, StoreInterface, ThemeType } from "./StoreInterface";
// import getUsers from "../../shared/users/getUsers";
// import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";
// import type { UserType } from "../../features/user/UserType";
// import type { BoardType } from "../../features/register/types/BoardType";
import type { ColumnType } from "../../features/register/types/ColumnType";
// import type { TaskType } from "../../features/register/types/TaskType";

const useStore = create<StoreInterface>((set) => ({
  theme: localStorage.getItem("themeMode") || "light",
  // currentBoard: null,
  // currentUser: JSON.parse(localStorage.getItem("currentUser") as string),
  toggleTheme: () => {
    set((state: StoreInterface) => {
      const nextTheme: ThemeType = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", nextTheme);

      return { theme: nextTheme };
    });
  },
  // confirmData: async (data: SingInInterface) => {
  //   const users = await getUsers();
  //   const loggedUser = users.find(
  //     (user: UserType) => user.email === data.email
  //   );

  //   if (loggedUser) {
  //     localStorage.setItem("currentUser", JSON.stringify(loggedUser));
  //     set({ currentUser: loggedUser });
  //   } else {
  //     set({ currentUser: null });
  //   }
  // },
  // getBoard: async (id: string) => {
  //   try {
  //     const res = await fetch(`http://localhost:3000/boards/${id}`);
  //     const boardData = await res.json();
  //     set({ currentBoard: boardData });
  //     return boardData;
  //   } catch (e) {
  //     console.error("Failed to fetch board:", e);
  //     return null;
  //   }
  // },
  // deleteBoard: async (id: string) => {
  //   try {
  //     const res = await fetch(`http://localhost:3000/boards/${id}`, {
  //       method: "DELETE",
  //     });

  //     if (res.ok) {
  //       console.log("Удалено");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },

  // addColumn: async (currentBoard: BoardType, newColumnList: ColumnType[]) => {
  //   try {
  //     const res = await fetch(
  //       `http://localhost:3000/boards/${currentBoard.id}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           ...currentBoard,
  //           columns: newColumnList,
  //         }),
  //       }
  //     );

  //     if (res.ok) {
  //       console.log("Успещно");
  //     } else {
  //       console.log("Ошибка при добавлении");
  //     }
  //   } catch (e) {
  //     console.error("Ошибка:", e);
  //   }
  // },
  // updateColumnOrder: (newColumns: ColumnType[]) =>
  //   set((state) => ({
  //     currentBoard: state.currentBoard
  //       ? { ...state.currentBoard, columns: newColumns }
  //       : null,
  //   })),
  // deleteColumn: async (currentBoard: BoardType, columnId: number) => {
  //   const updatedColumns = currentBoard?.columns.filter(
  //     (column) => column.id !== columnId
  //   );

  //   try {
  //     const res = await fetch(
  //       `http://localhost:3000/boards/${currentBoard?.id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ columns: updatedColumns }),
  //       }
  //     );
  //     if (res.ok) {
  //       console.log("Удалено");
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
  // // setCurrentUser: (user: UserType) => set({ currentUser: user }),
  // setCurrentBoard: (board: BoardType | null) => set({ currentBoard: board }),
  // addTask: async (title: string, currentBoard: BoardType, columnId: Id) => {
  //   ///НУЖНО ЕЩЕ РАЗ ПОСМОТРЕТЬ
  //   try {
  //     const columnIndex = currentBoard.columns.findIndex(
  //       (col) => col.id === columnId
  //     );
  //     const newTask: TaskType = {
  //       id: Date.now(),
  //       date: Date.now().toString(),
  //       taskTitle: title,
  //       comments: [],
  //       background: null,
  //     };
  //     const column = currentBoard.columns[columnIndex];
  //     const updatedTaskList = column.taskList
  //       ? [...column.taskList, newTask]
  //       : [newTask];
  //     const updatedColumn = {
  //       ...column,
  //       taskList: updatedTaskList,
  //     };
  //     const updatedColumns = [...currentBoard.columns];
  //     updatedColumns[columnIndex] = updatedColumn;

  //     const response = await fetch(
  //       `http://localhost:3000/boards/${currentBoard.id}`,
  //       {
  //         method: "PATCH",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ columns: updatedColumns }),
  //       }
  //     );

  //     if (!response.ok) throw new Error("Failed to update board");

  //     const updatedBoard = await response.json();
  //     console.log("Updated board:", updatedBoard);
  //   } catch (error) {
  //     console.error("Error adding task:", error);
  //   }
  // },
  // deleteTask: async (
  //   column: ColumnType,
  //   taskId: number,
  //   currentBoard: BoardType
  // ) => {
  //   const updatedTaskList = column.taskList.filter(
  //     (task: TaskType) => task.id !== taskId
  //   );
  //   const updatedColumn = { ...column, taskList: updatedTaskList };
  //   const updatedColumnList = currentBoard?.columns.map((col) =>
  //     col.id === column.id ? updatedColumn : col
  //   );

  //   try {
  //     const res = await fetch(
  //       `http://localhost:3000/boards/${currentBoard?.id}`,
  //       {
  //         method: "PATCH",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ columns: updatedColumnList }),
  //       }
  //     );

  //     if (res.ok) {
  //       return "+++";
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // },
  saveInServer: (id: Id, columnOrder: ColumnType[]) => {
    fetch(`http://localhost:3000/boards/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ columns: columnOrder }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error");
        }
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      });
  },
}));

export default useStore;
