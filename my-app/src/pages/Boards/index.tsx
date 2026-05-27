import BoardList from "../../widgets/boards/BoardList";
import PageTitle from "../../widgets/common/PageTitle";

const Boards = () => {
  return (
    <section className="h-full pt-8">
      <PageTitle title="Boards List" />
      <BoardList />
    </section>
  );
};

export default Boards;
