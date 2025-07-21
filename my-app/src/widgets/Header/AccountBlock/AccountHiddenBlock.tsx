import useStore from "../../../app/store";
import useUserStore from "../../../app/store/user/userStore";
import LogOutIcon from "../../../shared/icons/LogOutIcon";
import AccountProfileIMG from "./AccountProfileIMG";

const AccountHiddenBlock = ({
  showAccount,
  logOut,
}: {
  showAccount: boolean;
  logOut: () => void;
}) => {
  const { theme } = useStore();
  const { currentUser } = useUserStore();

  return (
    <div
      className={`border absolute top-16 border-[#838383] right-5 h-52 w-80 flex flex-col justify-between  px-4 py-3 rounded-md shadow-lg  gap-2 ${
        showAccount ? "block" : "hidden"
      } ${theme === "light" ? "bg-[#6565a4]" : "bg-[#242424]"}`}
    >
      <h1 className="text-lg text-white font-medium ">Account</h1>
      <div className="flex">
        <AccountProfileIMG />
        <p className=" flex flex-col justify-center px-2">
          <span className="text-white text-sm font-medium">
            {currentUser?.username}
          </span>
          <span className="text-white text-xs font-normal">
            {currentUser?.email}
          </span>
        </p>
      </div>
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
};

export default AccountHiddenBlock;
