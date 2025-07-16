const AuthButton = ({ buttonText }: { buttonText: string }) => {
  return (
    <button
      className="
      font-medium
      bg-[rgba(62,74,246,0.2)] py-2 px-6 lg:py-4 lg:px-10 shadow-md text-white text-md lg:text-xl rounded-md 
      lg:hover:cursor-pointer  lg:hover:bg-white lg:hover:text-[#7B77EE]
      lg:hover:shadow-[0_0_0_1px_#7B77EE] transition-all duration-200"
    >
      {buttonText}
    </button>
  );
};

export default AuthButton;
