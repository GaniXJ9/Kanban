import AllChips from "./AllChips";
import Lines from "./Lines";

const DndInfoBlock = () => {
  return (
    <section className="relative flex justify-center items-center h-[31vh]">
      <Lines />
      <div className="bg-gradient-to-b bg-[#2e2d2d] relative px-6 py-4 text-2xl font-extrabold text-white rounded-lg border-4 border-[#575757] shadow-lg">
        <AllChips />
        <span className="text-2xl bg-gradient-to-r text-transparent bg-clip-text from-gray-400 to-gray-100  ">
          KANBAN
        </span>
      </div>
    </section>
  );
};

export default DndInfoBlock;
