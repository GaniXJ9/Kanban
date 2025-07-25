const AddColumnButton = ({
  toggleShowInputColumn,
}: {
  toggleShowInputColumn: () => void;
}) => {
  return (
    <button
      onClick={toggleShowInputColumn}
      className={`size-full  p-3 rounded-md outline-none text-start lg:hover:cursor-pointer transition-all duration-200 bg-[#ffffff]  text-slate-800 lg:hover:bg-slate-300 dark:bg-[#1a1a1a] dark:text-white  dark:lg:hover:bg-slate-600 `}
    >
      + Add Column
    </button>
  );
};

export default AddColumnButton;
