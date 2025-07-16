import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { SingInInterface } from "../types/SingInInterface";
import useUserStore from "../../../app/store/user/userStore";

export function useSignIn() {
  const { currentUser, confirmData } = useUserStore();
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
