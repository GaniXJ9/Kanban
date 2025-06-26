import { useForm } from "react-hook-form";
import Input from "../shared/Input";
import type { SingInInterface } from "../app/types/types";
import type { User } from "../app/types/User";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const getUsers = async () => {
  try {
    const users = await fetch("http://localhost:3000/users");

    return users.json();
  } catch (error) {
    console.log(error);
  }
};

function SingIn() {
  const [authProblem, setAuthProblem] = useState<boolean>(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SingInInterface>({});
  const navigate = useNavigate();

  const onSubmit = async (data: SingInInterface) => {
    const users = await getUsers();

    const logedUser: User = users.find((user: User) => {
      return user.email === data.email;
    });

    if (logedUser && logedUser.password === data.password) {
      navigate("/");
      localStorage.setItem("token", logedUser.token);
    } else {
      setAuthProblem(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full gap-5 rounded-md "
    >
      <p
        className={`text-xl transition-all font-medium duration-200 text-rose-600 ${
          authProblem
            ? "static opacity-100  -translate-y-1"
            : "absolute opacity-0"
        }`}
      >
        Incorrect data! Wrong password or email!
      </p>

      <Input
        label="email"
        type="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input label="password" type="password" register={register("password")} />
      <button
        className="
      font-medium
      bg-[rgba(62,74,246,0.2)] py-4 px-10 shadow-md text-white text-xl rounded-md 
      lg:hover:cursor-pointer  lg:hover:bg-white lg:hover:text-[#7B77EE]
      lg:hover:shadow-[0_0_0_1px_#7B77EE] transition-all duration-200"
      >
        Sing In
      </button>
    </form>
  );
}

export default SingIn;
