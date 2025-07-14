import { useNavigate } from "react-router-dom";
import DeleteIcon from "../../shared/icons/DeleteIcon";
import useBoardStore from "../../app/store/board/boardStore";

const EntityPanel = () => {
  const navigate = useNavigate();
  const { currentBoard, deleteBoard } = useBoardStore();

  const handleBoardDeleting = () => {
    if (currentBoard) {
      deleteBoard(currentBoard.id);
      navigate("/boards");
    }
  };

  return (
    <section className="fixed w-full flex justify-between items-center px-10 backdrop-blur-sm h-16 z-0 mb-14  ">
      <h1 className={`text-xl font-medium text-white`}>
        {currentBoard?.title}
      </h1>
      <div
        onClick={handleBoardDeleting}
        className={`border  p-2 rounded-full lg:hover:bg-red-500 lg:hover:border-re-500 text-white transition-all duration-200 lg:hover:cursor-pointer`}
      >
        <DeleteIcon />
      </div>
    </section>
  );
};

export default EntityPanel;
