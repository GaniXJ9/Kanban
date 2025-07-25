import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountHiddenBlock from "./AccountHiddenBlock";
import AccountProfileIMG from "./AccountProfileIMG";

const AccountBlock = () => {
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
        className={`relative flex items-center  p-1 rounded-md lg:hover:cursor-pointer lg:hover:bg-gray-300 dark:lg:hover:bg-gray-700`}
        onClick={toggleShowAccount}
      >
        <AccountProfileIMG />
      </div>
      <AccountHiddenBlock showAccount={showAccount} logOut={logOut} />
    </>
  );
};

export default AccountBlock;
