import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SignInForm } from "../schema";
import useUsers from "../../../app/store/users";

export function useSignIn() {
  const { currentUser, confirmData } = useUsers();
  const navigate = useNavigate();
  const [authProblem, setAuthProblem] = useState<boolean>(false);

  const toSignIn = async (data: SignInForm) => {
    confirmData(data);

    if (currentUser && currentUser.password === data.password) {
      localStorage.setItem("token", currentUser.token);
      navigate("/");
    } else {
      setAuthProblem(true);
    }
  };

  return { toSignIn, authProblem };
}
