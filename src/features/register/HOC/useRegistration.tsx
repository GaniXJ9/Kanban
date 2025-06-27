import { useNavigate } from "react-router-dom";
import type { RegisterInterface } from "../types/RegisterInterface";

export function useRegistration() {
  const userToken = crypto.randomUUID();
  const navigate = useNavigate();

  const registration = async (data: RegisterInterface) => {
    const dataWithToken = { ...data, token: userToken };
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataWithToken),
      });

      if (res.ok) {
        localStorage.setItem("token", userToken);
        navigate("/");
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return { registration, userToken };
}
