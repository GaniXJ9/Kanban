import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useStore from "../../../app/store";
import TaskStatusBlock from "../../../widgets/BorderDetail/TaskStatusBlock";

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
    <section className="w-full pt-14 grid grid-cols-4 gap-10 min-h-1/2">
      <TaskStatusBlock taskName="To Do" />
      <TaskStatusBlock taskName="Done" />
      <TaskStatusBlock taskName="In process" />
    </section>
  );
};

export default BoardDetail;
