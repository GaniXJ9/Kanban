import useStore from "../../app/store";
import DeleteIcon from "../../shared/icons/DeleteIcon";

const EntityPanel = () => {
  const { currentBoard } = useStore();
  return (
    <section className="fixed w-full flex justify-between items-center px-10 backdrop-blur-sm h-16 z-0 mb-14  ">
      <h1 className={`text-xl font-medium text-white`}>
        {currentBoard?.title}
      </h1>
      <div
        className={`border  p-2 rounded-full lg:hover:bg-red-500 lg:hover:border-re-500 text-white transition-all duration-200 lg:hover:cursor-pointer`}
      >
        <DeleteIcon />
      </div>
    </section>
  );
};

export default EntityPanel;
