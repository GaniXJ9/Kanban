import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../app/store";
import AccountHiddenBlock from "./AccountHiddenBlock";

function AccountBlock() {
  const { currentUser, theme } = useStore();
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const navigate = useNavigate();

  const toggleShowAccount = () => {
    setShowAccount((prev) => !prev);
  };

  const logOut = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    navigate("/auth");
    toggleShowAccount();
  };

  return (
    <>
      <div
        className={`relative flex items-center  p-1 rounded-md lg:hover:cursor-pointer ${
          theme === "light" ? "lg:hover:bg-gray-300" : "lg:hover:bg-gray-700"
        }`}
        onClick={toggleShowAccount}
      >
        <div
          className={`size-10 border-2 rounded-full flex items-center justify-center ${
            theme === "light"
              ? "bg-[#a194d4] border-white "
              : "bg-[#262629] border-[#838383]"
          }`}
        >
          <p className="text-white uppercase">{currentUser?.username[0]}</p>
        </div>
      </div>
      <AccountHiddenBlock showAccount={showAccount} logOut={logOut} />
    </>
  );
}

export default AccountBlock;
