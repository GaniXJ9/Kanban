import { useEffect, useState } from "react";
import useStore from "../../app/store";
import BoardCard from "./BoardCard";
import { getAllBoards } from "../../shared/boards/getAllBoards";
import type { BoardType } from "../../features/register/types/BoardType";
import useUserStore from "../../app/store/user/userStore";
import useBoardStore from "../../app/store/board/boardStore";

const BoardListContainer = () => {
  const [boards, setBoards] = useState<BoardType[] | null>(null);
  const { theme } = useStore();
  const { currentUser } = useUserStore();
  const { setCurrentBoard } = useBoardStore();

  useEffect(() => {
    async function showBoards() {
      const allBoards = await getAllBoards();
      const currentUserBoards = allBoards.filter((board: BoardType) => {
        return board.user === currentUser?.token;
      });

      setCurrentBoard(null);
      setBoards(currentUserBoards);
    }

    showBoards();
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
          {boards.map((el: BoardType) => (
            <BoardCard el={el} key={el.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BoardListContainer;
