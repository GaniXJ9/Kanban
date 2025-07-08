import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useStore from "../../../app/store";
import type { ColumnType } from "../../../features/register/types/BoardType";
import BoardColumn from "../../../widgets/BorderDetail/Column/BoardColumn";
import AddColumn from "../../../widgets/BorderDetail/Column/AddColumn";

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
    <section className="w-full pt-14 grid  grid-cols-4 gap-10 min-h-1/2">
      {currentBoard.columns.map((column: ColumnType) => (
        <BoardColumn key={column.id} column={column} />
      ))}
      <AddColumn />
    </section>
  );
};

export default BoardDetail;
