import Comments from "./Comments/Comments";
import TaskDescription from "./TaskDescription";

const ModalBody = () => {
  return (
    <section className="px-7  flex overflow-y-auto ">
      <TaskDescription />
      <Comments />
    </section>
  );
};

export default ModalBody;
