import useStore from "../../app/store";

const EntityPanel = () => {
  const { currentBoard } = useStore();
  return (
    <section className="fixed w-full bg-[rgba(255,255,255,0.8)] h-16 z-0 mb-14 shadow-[0_0_3px_1px_rgba(0,0,0,0.5)_inset]">
      {currentBoard?.title}
    </section>
  );
};

export default EntityPanel;
