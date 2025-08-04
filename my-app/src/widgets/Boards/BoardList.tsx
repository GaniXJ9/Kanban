import { useEffect } from "react";
import BoardCard from "./BoardCard";
import useBoards from "../../app/store/boards";
import type { BoardEntity } from "../../features/types/boards/BoardEntity";
import useUsers from "../../app/store/users";
import "react-loading-skeleton/dist/skeleton.css";
import Loader from "../Loader";

const BoardList = () => {
  const { boards, setUserBoards } = useBoards();
  const { currentUser } = useUsers();

  useEffect(() => {
    if (currentUser) {
      setUserBoards(currentUser?.token);
    }
  }, []);

  if (!boards) {
    return <Loader />;
  }
  return (
    <section className="h-full">
      {boards.length === 0 ? (
        <h3
          className={`text-lg font-normal uppercase w-full py-10 text-slate-400 dark:text-slate-200`}
        >
          Empty List
        </h3>
      ) : (
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 p-2">
          {boards.map((board: BoardEntity) => (
            <BoardCard board={board} key={board.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BoardList;
