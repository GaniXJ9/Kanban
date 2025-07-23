import { useNavigate } from "react-router-dom";

import type { RegistrationForm } from "../schema";
import type { UserEntity } from "../../types/users/UserEntity";

export function useRegistration() {
  const userToken = crypto.randomUUID();
  const navigate = useNavigate();

  const toRegister = async (data: RegistrationForm) => {
    const dataWithToken: UserEntity = {
      ...data,
      token: userToken,
      boards: [],
    };

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataWithToken),
      });

      if (response.ok) {
        localStorage.setItem("token", userToken);
        localStorage.setItem("currentUser", JSON.stringify(dataWithToken));
        navigate("/");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return { toRegister, userToken };
}
