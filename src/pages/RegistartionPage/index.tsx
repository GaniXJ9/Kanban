import { useForm } from "react-hook-form";
import AuthInput from "../../shared/ui/AuthInput";
import type { RegisterInterface } from "../../features/register/types/RegisterInterface";
import { registerSchema } from "../../features/register/schema/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegistration } from "../../features/register/use-hook/useRegistration";
import AuthButton from "../../shared/ui/AuthButton";

const RegistartionPage = () => {
  const { registration } = useRegistration();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInterface>({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterInterface) => {
    registration(data);
  };

  return (
    <form
      className="flex flex-col items-center w-full gap-5 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthInput
        label="username"
        type="text"
        register={register("username")}
        error={errors.username?.message}
      />
      <AuthInput
        label="email"
        type="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <AuthInput
        label="password"
        type="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <AuthInput
        label="confirm password"
        type="password"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <AuthButton text="Registration" />
    </form>
  );
};

export default RegistartionPage;
