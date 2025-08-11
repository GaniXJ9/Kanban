import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegistration } from "../../features/register/use-hook/useRegistration";
import {
  registration,
  type RegistrationForm,
} from "../../features/register/schema";
import PrimaryButton from "../../shared/ui/buttons/PrimaryButton";
import Input from "../../shared/ui/inputs/Input";
import { NavLink } from "react-router-dom";

const RegistartionForm = () => {
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
      className="flex flex-col items-center w-full gap-8 rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        fontSize="md"
        label="username"
        type="text"
        register={register("username")}
        error={errors.username?.message}
      />
      <Input
        fontSize="md"
        label="email"
        type="email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        fontSize="md"
        label="password"
        type="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <Input
        fontSize="md"
        label="confirm password"
        type="password"
        register={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <PrimaryButton text="Registration" padding={"px-3 py-2"} />
      <NavLink
        to="/sign-in"
        className="text-[#07437A] dark:text-slate-300 border-b border-[#07437A] dark:border-slate-300"
      >
        to Sing In
      </NavLink>
    </form>
  );
};

export default RegistartionForm;
