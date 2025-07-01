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
          className={`text-xl w-full text-center ${
            theme === "light" ? "text-slate-600" : "text-slate-200"
          }`}
        >
          Cписок пуст
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
