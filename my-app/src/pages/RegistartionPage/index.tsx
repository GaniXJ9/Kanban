import { useForm } from "react-hook-form";
import AuthInput from "../../shared/ui/AuthInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegistration } from "../../features/register/use-hook/useRegistration";
import AuthButton from "../../shared/ui/AuthButton";
import {
  registration,
  type RegistrationForm,
} from "../../features/register/schema";

const RegistartionPage = () => {
  const { toRegister } = useRegistration();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: yupResolver(registration),
  });

  const onSubmit = async (data: RegistrationForm) => {
    toRegister(data);
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
      <AuthButton buttonText="Registration" />
    </form>
  );
};

export default RegistartionPage;
