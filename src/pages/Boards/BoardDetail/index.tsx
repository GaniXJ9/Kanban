import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useStore from "../../../app/store";

function BoardDetail() {
  const { id } = useParams();
  const getBoard = useStore((state) => state.getBoard);
  const currentBoard = useStore((state) => state.currentBoard);

  useEffect(() => {
    if (id) {
      getBoard(id);
    }
  }, [id]);

  if (!currentBoard) return <p>Загрузка...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{currentBoard.title}</h1>
    </div>
  );
}

export default BoardDetail;
