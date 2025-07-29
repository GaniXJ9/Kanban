import { useNavigate } from "react-router-dom";
import DeleteIcon from "../../shared/icons/DeleteIcon";
import useBoards from "../../app/store/boards";
import useTasks from "../../app/store/tasks";
import DangerButton from "../../shared/ui/bottons/DangerButton";

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

      <DangerButton
        onClick={handleDelete}
        padding={"p-2"}
        rounded={"full"}
        Icon={DeleteIcon}
      />
    </section>
  );
};

export default EntityPanel;
