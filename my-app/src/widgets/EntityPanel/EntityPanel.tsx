import { useNavigate } from "react-router-dom";
import DeleteIcon from "../../shared/icons/DeleteIcon";
import useBoards from "../../app/store/boards";
import useTasks from "../../app/store/tasks";

const EntityPanel = () => {
  const navigate = useNavigate();
  const { currentBoard, deleteBoard } = useBoards();
  const { setCurrentTask } = useTasks();

  const handleDelete = () => {
    if (currentBoard) {
      deleteBoard(currentBoard.id);
      setCurrentTask(null);
      navigate("/boards");
    }
  };

  return (
    <section className="fixed w-full flex justify-between items-center px-10 backdrop-blur-sm h-16 z-40 mb-14 ">
      <h1 className={`text-xl font-medium text-white`}>
        {currentBoard?.title}
      </h1>
      <div
        onClick={handleDelete}
        className={`border  p-2 rounded-full lg:hover:bg-red-500 lg:hover:border-re-500 text-white transition-all duration-200 lg:hover:cursor-pointer`}
      >
        <DeleteIcon />
      </div>
    </section>
  );
};

export default EntityPanel;
