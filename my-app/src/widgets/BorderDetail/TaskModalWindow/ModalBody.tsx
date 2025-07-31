import Comments from "./Comments/Comments";
import TaskDescription from "./TaskDescription";

const ModalBody = () => {
  return (
    <section className="px-7 flex flex-col lg:flex-row overflow-y-auto max-h-[80vh] lg:max-h-[50vh]">
      <TaskDescription />
      <Comments />
    </section>
  );
};

export default ModalBody;
