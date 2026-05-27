import getUsers from "../../../shared/users/get-users";
import type { Users } from "../../../features/types/users/users";
import type { UserEntity } from "../../../features/types/users/user-entity";
import type { SignInFormType } from "../../../features/sing-in/schema";
import { create } from "zustand";

const useUsers = create<Users>((set) => ({
  currentUser: JSON.parse(localStorage.getItem("currentUser") as string),
  confirmData: async (data: SignInFormType) => {
    try {
      const users = await getUsers();
      const loggedUser = users.find(
        (user: UserEntity) => user.email === data.email,
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
