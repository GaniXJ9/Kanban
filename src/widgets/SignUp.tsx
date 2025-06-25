import Input from "../shared/Input";

function SingUp() {
  return (
    <div className="flex flex-col items-center w-full gap-5 rounded-md">
      <Input lable="username" type="text" />
      <Input lable="email" type="email" />
      <Input lable="password" type="password" />
      <Input lable="confirm password" type="password" />

      <button
        className="
      font-medium
      bg-[rgba(62,74,246,0.2)] py-4 px-10 shadow-md text-white text-xl rounded-md 
      lg:hover:cursor-pointer  lg:hover:bg-white lg:hover:text-[#7B77EE]
      lg:hover:shadow-[0_0_0_1px_#7B77EE] transition-all duration-200"
      >
        Sing Up
      </button>
    </div>
  );
}

export default SingUp;
