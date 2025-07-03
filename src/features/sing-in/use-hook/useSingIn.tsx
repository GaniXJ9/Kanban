import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SingInInterface } from "../types/SingInInterface";
import useStore from "../../../app/store";

export function useSignIn() {
  const { currentUser, confirmData } = useStore();
  const navigate = useNavigate();
  const [authProblem, setAuthProblem] = useState<boolean>(false);

  const signIn = async (data: SingInInterface) => {
    confirmData(data);

    if (currentUser && currentUser.password === data.password) {
      localStorage.setItem("token", currentUser.token);
      navigate("/");
    } else {
      setAuthProblem(true);
    }
  };

  return { signIn, authProblem };
}
