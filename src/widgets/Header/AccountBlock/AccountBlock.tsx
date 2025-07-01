import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../../../app/store";
import AccountHiddenBlock from "./AccountHiddenBlock";
import AccountProfileIMG from "./AccountProfileIMG";

function AccountBlock() {
  const { theme } = useStore();
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
        <AccountProfileIMG />
      </div>
      <AccountHiddenBlock showAccount={showAccount} logOut={logOut} />
    </>
  );
}

export default AccountBlock;
