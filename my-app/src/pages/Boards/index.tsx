import BoardList from "../../widgets/boards/board-list";
import PageTitle from "../../widgets/common/page-title";

const Boards = () => {
  return (
    <section className="h-full pt-8">
      <PageTitle title="Boards List" />
      <BoardList />
    </section>
  );
};

export default Boards;
