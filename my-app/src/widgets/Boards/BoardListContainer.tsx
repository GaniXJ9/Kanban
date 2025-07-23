import { useEffect } from "react";
import useStore from "../../app/store";
import BoardCard from "./BoardCard";
import useUserStore from "../../app/store/users";
import useBoards from "../../app/store/boards";
import type { BoardEntity } from "../../features/types/boards/BoardEntity";

const BoardListContainer = () => {
  const { boards, setUserBoards } = useBoards();
  const { theme } = useStore();
  const { currentUser } = useUserStore();

  useEffect(() => {
    if (currentUser) setUserBoards(currentUser?.token);
  }, []);

  if (!boards) {
    return <h1>loading</h1>;
  }

  return (
    <section className="h-full">
      {boards.length === 0 ? (
        <h3
          className={`text-lg font-normal uppercase w-full py-10 ${
            theme === "light" ? "text-slate-400" : "text-slate-200"
          }`}
        >
          Empty List
        </h3>
      ) : (
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-2 p-2">
          {boards.map((el: BoardEntity) => (
            <BoardCard el={el} key={el.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BoardListContainer;
