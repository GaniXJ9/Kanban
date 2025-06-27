import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { UserType } from "../../user/UserType";
import type { SingInInterface } from "../types/SingInInterface";
import getUsers from "../../../shared/users/getUsers";

export function useSignIn() {
  const navigate = useNavigate();
  const [authProblem, setAuthProblem] = useState<boolean>(false);

  const signIn = async (data: SingInInterface) => {
    const users = await getUsers();

    const loggedUser = users.find(
      (user: UserType) => user.email === data.email
    );

    if (loggedUser && loggedUser.password === data.password) {
      localStorage.setItem("token", loggedUser.token);
      navigate("/");
    } else {
      setAuthProblem(true);
    }
  };

  return { signIn, authProblem };
}
