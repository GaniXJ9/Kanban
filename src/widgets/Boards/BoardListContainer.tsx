import useStore from "../../app/store";
import BoardCard from "./BoardCard";

function BoardListContainer() {
  const { theme, currentUser } = useStore();
  if (!currentUser?.boards) {
    return <h1>Loading</h1>;
  }
  return (
    <section>
      {currentUser?.boards.length === 0 ? (
        <h3
          className={`text-lg font-normal uppercase w-full py-10 ${
            theme === "light" ? "text-slate-400" : "text-slate-200"
          }`}
        >
          Empty List
        </h3>
      ) : (
        <div>
          {currentUser.boards.map((el) => (
            <BoardCard el={el} />
          ))}
        </div>
      )}
    </section>
  );
}

export default BoardListContainer;
