import useTasks from "../../../app/store/tasks";

const ModalBody = () => {
  const { currentTask } = useTasks();

  return (
    <section className="h-48 p-7">
      <div className="p-5">
        <p className="border-b text-2xl text-slate-600 font-medium py-2">
          Description
        </p>
        <p className="">
          {currentTask?.description ? (
            <>{currentTask.description}</>
          ) : (
            <span className="text-md font-normal">You can add description</span>
          )}
        </p>
      </div>
    </section>
  );
};

export default ModalBody;
