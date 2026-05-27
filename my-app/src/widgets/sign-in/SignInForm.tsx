import { useForm } from "react-hook-form";
import Input from "../../shared/ui/inputs/Input";
import { useSignIn } from "../../features/sing-in/use-hook/useSingIn";
import { signIn, type SignInFormType } from "../../features/sing-in/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from "../../shared/ui/buttons/PrimaryButton";
import { NavLink } from "react-router-dom";

const SignInForm = () => {
  const { authProblem, toSignIn } = useSignIn();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormType>({
    resolver: yupResolver(signIn),
  });

  const onSubmit = (data: SignInFormType) => {
    toSignIn(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center w-full gap-8 "
    >
      <p
        className={`text-md transition-all font-medium duration-200 text-rose-600 ${
          authProblem
            ? "static opacity-100  translate-y-4"
            : "absolute opacity-0"
        }`}
      >
        Incorrect data! Wrong password or email!
      </p>
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
      />

      <PrimaryButton text="Sing In" padding={"px-5 py-2"} />

      <NavLink
        to="/registration"
        className="text-[#07437A] dark:text-slate-300 border-b border-[#07437A] dark:border-slate-300"
      >
        to Registration
      </NavLink>
    </form>
  );
};

export default SignInForm;
