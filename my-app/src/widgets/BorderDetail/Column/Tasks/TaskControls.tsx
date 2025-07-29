import type { ColumnEntity } from "../../../../features/types/columns/ColumnEntity";
import useBoards from "../../../../app/store/boards";
import useTasks from "../../../../app/store/tasks";
import BarsOutlined from "../../../../shared/icons/BarsOutlined";
import DeleteTaskIcon from "../../../../shared/icons/DeleteTaskIcon";
import type { Id } from "../../../../shared/type/IdType";
import useColumns from "../../../../app/store/columns";
import SecondaryButton from "../../../../shared/ui/bottons/SecondaryButton";
import DangerButton from "../../../../shared/ui/bottons/DangerButton";

const TaskControls = ({
  column,
  taskId,
}: {
  column: ColumnEntity;
  taskId: Id;
}) => {
  const { currentBoard } = useBoards();
  const { setCurrentColumn } = useColumns();
  const { setCurrentTask, deleteTask } = useTasks();

  const handleDeleteTask = () => {
    if (currentBoard) {
      deleteTask(taskId, column, currentBoard);
      setCurrentTask(null);
    }
  };

  const showModal = () => {
    const currentTask = column.tasks.find((task) => task.id === taskId);
    if (currentTask) {
      setCurrentTask(currentTask);
      setCurrentColumn(column);
    } else {
      console.log("Task Not Found");
    }
  };
  return (
    <div className="flex gap-1 z-0">
      <SecondaryButton
        onClick={showModal}
        padding="px-1"
        size="size-6"
        rounded="md"
        Icon={BarsOutlined}
      />
      <DangerButton
        onClick={handleDeleteTask}
        Icon={DeleteTaskIcon}
        size="size-6"
        rounded="md"
      />
    </div>
  );
};

export default TaskControls;
