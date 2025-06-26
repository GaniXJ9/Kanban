import { useForm } from "react-hook-form";
import Input from "../shared/Input";
import type { RegisterInterface } from "../app/types/types";
import { schema } from "../app/schema/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SingUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInterface>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterInterface) => {
    const newToken = crypto.randomUUID();
    const dataWithToken = { ...data, token: newToken };

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataWithToken),
      });

      if (res.ok) {
        localStorage.setItem("token", dataWithToken.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex flex-col items-center w-full gap-5 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label="username"
        type="text"
        register={register("username")}
        error={errors.username?.message}
      />
      <Input
        label="email"
        type="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="password"
        type="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <Input
        label="confirm password"
        type="password"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      <button
        className="
      font-medium
      bg-[rgba(62,74,246,0.2)] py-4 px-10 shadow-md text-white text-xl rounded-md 
      lg:hover:cursor-pointer  lg:hover:bg-white lg:hover:text-[#7B77EE]
      lg:hover:shadow-[0_0_0_1px_#7B77EE] transition-all duration-200"
      >
        Sing Up
      </button>
    </form>
  );
}

export default SingUp;
