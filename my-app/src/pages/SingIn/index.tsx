import DesksIcon from "../../shared/icons/DesksIcon";
import SignInForm from "../../widgets/SignIn/SignInForm";

const SingInPage = () => {
  return (
    <section className="bg-[#f3f3f3] dark:bg-[#28435b] h-screen flex justify-center items-center">
      <div className="bg-[#ffffff]  dark:bg-[#192d3f]   dark:border dark:border-[#293946] p-10 w-4/5 lg:w-1/2 shadow-xl rounded-lg">
        <p className="w-full flex justify-center items-center gap-3 py-5">
          <span className="p-2  bg-[#07437A] rounded-md text-white">
            <DesksIcon />
          </span>
          <span className="text-center text-xl lg:text-3xl text-[#07437A] dark:text-slate-200 font-medium ">
            KANBAN
          </span>
        </p>
        <SignInForm />
      </div>
    </section>
  );
};

export default SingInPage;
