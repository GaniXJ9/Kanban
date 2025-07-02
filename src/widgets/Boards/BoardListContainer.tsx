import useStore from "../../app/store";
import type { CreateBoardInterface } from "../../features/register/types/CreateBoardInterface";
import BoardCard from "./BoardCard";

function BoardListContainer() {
  const { theme, currentUser } = useStore();

  return (
    <section className="h-full">
      {currentUser?.boards.length === 0 ? (
        <h3
          className={`text-lg font-normal uppercase w-full py-10 ${
            theme === "light" ? "text-slate-400" : "text-slate-200"
          }`}
        >
          Empty List
        </h3>
      ) : (
        <div className="w-full h-2/3  grid grid-cols-3 gap-3 py-4">
          {currentUser?.boards.map(
            (el: CreateBoardInterface, index: number) => (
              <BoardCard el={el} key={index} />
            )
          )}
        </div>
      )}
    </section>
  );
}

export default BoardListContainer;
