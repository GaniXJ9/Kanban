import { create } from "zustand";
import getUsers from "../../../shared/users/getUsers";
import type { Users } from "../../../features/types/users/Users";
import type { UserEntity } from "../../../features/types/users/UserEntity";
import type { SignInForm } from "../../../features/sing-in/schema";

const useUsers = create<Users>((set) => ({
  currentUser: JSON.parse(localStorage.getItem("currentUser") as string),
  confirmData: async (data: SignInForm) => {
    try {
      const users = await getUsers();
      const loggedUser = users.find(
        (user: UserEntity) => user.email === data.email
      );

      if (loggedUser) {
        localStorage.setItem("currentUser", JSON.stringify(loggedUser));
        set({ currentUser: loggedUser });
      } else {
        set({ currentUser: null });
      }
    } catch (e) {
      console.log("error", e);
    }
  },

  setCurrentUser: (user: UserEntity) => set({ currentUser: user }),
}));

export default useUsers;
