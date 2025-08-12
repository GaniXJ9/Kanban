import BoardList from "../../widgets/Boards/BoardList";
import PageTitle from "../../widgets/Common/PageTitle";

const Boards = () => {
  return (
    <section className="h-full pt-8">
      <PageTitle title="Boards List" />
      <BoardList />
    </section>
  );
};

export default Boards;
