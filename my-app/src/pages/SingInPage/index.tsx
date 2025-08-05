import { useForm } from "react-hook-form";
import Input from "../../shared/ui/inputs/Input";
import { useSignIn } from "../../features/sing-in/use-hook/useSingIn";
import { signIn, type SignInForm } from "../../features/sing-in/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from "../../shared/ui/buttons/PrimaryButton";

const SingInPage = () => {
  const { authProblem, toSignIn } = useSignIn();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInForm>({
    resolver: yupResolver(signIn),
  });

  const onSubmit = (data: SignInForm) => {
    toSignIn(data);
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
      <PrimaryButton text="Sing In" padding={"px-3 py-2"} />
    </form>
  );
};

export default SingInPage;
