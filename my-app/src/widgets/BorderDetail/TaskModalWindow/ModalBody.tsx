import Comments from "./Comments/Comments";
import TaskDescription from "./TaskDescription";

const ModalBody = () => {
  return (
    <section className="px-7 flex overflow-y-auto  max-h-[50vh]">
      <TaskDescription />
      <Comments />
    </section>
  );
};

export default ModalBody;
