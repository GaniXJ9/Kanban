import useStore from "../../app/store";
import LogOutIcon from "../../icons/LogOutIcon";

function AccountHiddenBlock({
  showAccount,
  logOut,
}: {
  showAccount: boolean;
  logOut: () => void;
}) {
  const { theme } = useStore();

  return (
    <div
      className={`border absolute top-16 border-[#838383] right-5 h-52 w-60 flex flex-col justify-between  px-4 py-3 rounded-md shadow-lg  gap-2 ${
        showAccount ? "block" : "hidden"
      }
      
      ${theme === "light" ? "bg-[#6565a4]" : "bg-[#272731]"}`}
    >
      <h1 className="text-lg text-white font-medium">Account</h1>

      <div className="border-b h-full border-[#768fb1]"></div>
      <p
        className={`text-white lg:hover:cursor-pointer p-1 rounded-sm  flex justify-between ${
          theme === "light" ? "lg:hover:bg-[#777dac]" : "lg:hover:bg-[#3e3e55]"
        }`}
        onClick={logOut}
      >
        <span>Log out</span>
        <LogOutIcon />
      </p>
    </div>
  );
}

export default AccountHiddenBlock;
