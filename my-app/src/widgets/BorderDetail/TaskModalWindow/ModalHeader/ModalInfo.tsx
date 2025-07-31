import dayjs from "dayjs";
import useColumns from "../../../../app/store/columns";
import useTasks from "../../../../app/store/tasks";
import InfoBlock from "./InfoBlock";

const ModalInfo = () => {
  const { currentColumn } = useColumns();
  const { currentTask } = useTasks();

  return (
    <div className="flex gap-2 items-start lg:items-center">
      <InfoBlock title="Column" text={currentColumn?.name || " "} />
      <InfoBlock title="Task" text={currentTask?.name || " "} />
      <InfoBlock
        title="Created Date"
        text={dayjs(currentTask?.date).format("YYYY-MM-DD")}
      />
    </div>
  );
};

export default ModalInfo;
