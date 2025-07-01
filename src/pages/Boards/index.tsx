import useStore from "../../app/store";
import BoardListContainer from "../../widgets/Boards/BoardListContainer";

function Boards() {
  const { theme } = useStore();
  return (
    <section className="h-full">
      <h1
        className={`text-3xl font-medium ${
          theme === "light" ? "text-slate-600" : "text-slate-200"
        }`}
      >
        Boards List
      </h1>

      <BoardListContainer />
    </section>
  );
}

export default Boards;
