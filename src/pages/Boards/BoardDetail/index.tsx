import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useStore from "../../../app/store";

const BoardDetail = () => {
  const { id } = useParams();
  const { getBoard, currentBoard } = useStore();

  useEffect(() => {
    if (id) {
      getBoard(id);
    }
  }, [id]);

  if (!currentBoard) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">{currentBoard.title}</h1>
    </div>
  );
};

export default BoardDetail;
