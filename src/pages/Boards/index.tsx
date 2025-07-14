import BoardListContainer from "../../widgets/Boards/BoardListContainer";
import PageTitle from "../../widgets/Common/PageTitle";

const Boards = () => {
  return (
    <section className="h-full">
      <PageTitle title="Boards List" />
      <BoardListContainer />
    </section>
  );
};

export default Boards;
