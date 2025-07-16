import useStore from "../../../app/store";

const AddColumnButton = ({
  toggleShowInputColumn,
}: {
  toggleShowInputColumn: () => void;
}) => {
  const { theme } = useStore();

  return (
    <button
      onClick={toggleShowInputColumn}
      className={`size-full  p-3 rounded-md outline-none text-start lg:hover:cursor-pointer transition-all duration-200 ${
        theme === "light"
          ? "bg-[#ffffff]  text-slate-800 lg:hover:bg-slate-300"
          : "bg-[#1a1a1a] text-white  lg:hover:bg-slate-600"
      } `}
    >
      {" "}
      + Add Column
    </button>
  );
};

export default AddColumnButton;
