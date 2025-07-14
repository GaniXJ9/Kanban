import useStore from "../../../app/store";
import useUserStore from "../../../app/store/user/userStore";

const AccountProfileIMG = () => {
  const { theme } = useStore();
  const { currentUser } = useUserStore();

  return (
    <div
      className={`size-10 border-2 rounded-full flex items-center justify-center ${
        theme === "light"
          ? "bg-[#a194d4] border-white "
          : "bg-[#313132] border-[#838383]"
      }`}
    >
      <p className="text-white uppercase">{currentUser?.username[0]}</p>
    </div>
  );
};

export default AccountProfileIMG;
