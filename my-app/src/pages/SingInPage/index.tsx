import { useForm } from "react-hook-form";
import type { SingInInterface } from "../../features/sing-in/types/SingInInterface";
import { useSignIn } from "../../features/sing-in/use-hook/useSingIn";
import AuthButton from "../../shared/ui/AuthButton";
import AuthInput from "../../shared/ui/AuthInput";

const SingInPage = () => {
  const { authProblem, signIn } = useSignIn();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SingInInterface>({});

  const onSubmit = (data: SingInInterface) => {
    signIn(data);
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
      />
      <AuthButton buttonText="Sing In" />
    </form>
  );
};

export default SingInPage;
