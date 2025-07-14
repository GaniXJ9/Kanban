import { create } from "zustand";
import type { SingInInterface } from "../../../features/sing-in/types/SingInInterface";
import getUsers from "../../../shared/users/getUsers";
import type { UserType } from "../../../features/user/UserType";
import type { UserStoreInterface } from "../type/UserStoreInterface";

const useUserStore = create<UserStoreInterface>((set) => ({
  currentUser: JSON.parse(localStorage.getItem("currentUser") as string),

  confirmData: async (data: SingInInterface) => {
    const users = await getUsers();
    const loggedUser = users.find(
      (user: UserType) => user.email === data.email
    );

    if (loggedUser) {
      localStorage.setItem("currentUser", JSON.stringify(loggedUser));
      set({ currentUser: loggedUser });
    } else {
      set({ currentUser: null });
    }
  },

  setCurrentUser: (user: UserType) => set({ currentUser: user }),
}));

export default useUserStore;
