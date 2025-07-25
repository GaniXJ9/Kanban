import BoardForm from "./BoardForm";

const CreateBoardBlock = () => {
  return (
    <section className="w-full">
      <h1
        className={`w-full text-center text-md font-medium text-slate-600 dark:text-slate-200 `}
      >
        Create Board
      </h1>
      <BoardForm />
    </section>
  );
};

export default CreateBoardBlock;
