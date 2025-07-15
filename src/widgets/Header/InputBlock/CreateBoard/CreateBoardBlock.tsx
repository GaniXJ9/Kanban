import useStore from "../../../../app/store";
import BoardForm from "./BoardForm";

const CreateBoardBlock = () => {
  const { theme } = useStore();

  return (
    <section className="w-full">
      <h1
        className={`w-full text-center text-md font-medium ${
          theme === "light" ? "text-slate-600" : "text-slate-200"
        } `}
      >
        Create Board
      </h1>
      <BoardForm />
    </section>
  );
};

export default CreateBoardBlock;
