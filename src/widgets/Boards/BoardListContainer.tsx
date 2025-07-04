import { useEffect, useState } from "react";
import useStore from "../../app/store";
import BoardCard from "./BoardCard";
import { getBoards } from "../../shared/boards/getBoards";
import type { BoardType } from "../../features/register/types/BoardType";

const BoardListContainer = () => {
  const [boards, setBoards] = useState<BoardType[] | null>(null);
  const { theme, currentUser, setCurrentBoard } = useStore();

  useEffect(() => {
    async function showBoards() {
      const allBoards = await getBoards();
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
        <div className="w-full h-2/3  grid grid-cols-3 gap-3 py-4">
          {boards.map((el: BoardType) => (
            <BoardCard el={el} key={el.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BoardListContainer;
