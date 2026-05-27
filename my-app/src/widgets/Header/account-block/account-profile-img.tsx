import useUsers from "../../../app/store/users";

const AccountProfileIMG = () => {
  const { currentUser } = useUsers();

  return (
    <div
      className={`size-10 border-2 rounded-full flex items-center justify-center bg-[#a194d4] border-white dark:bg-[#313132] dark:border-[#838383]`}
    >
      <p className="text-white uppercase">{currentUser?.username[0]}</p>
    </div>
  );
};

export default AccountProfileIMG;
