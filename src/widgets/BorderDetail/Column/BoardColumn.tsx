import useTheme from "../../../shared/use-hook/useTheme";
import AddTaskBlock from "../AddTaskBlock";
import type { ColumnType } from "../../../features/register/types/BoardType";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import DragableItemIcon from "../../../shared/icons/DragableItemIcon";
import ColumnHead from "./ColumnHead";
import TaskContainer from "./Tasks/TaskContainer";

const BoardColumn = ({ column }: { column: ColumnType }) => {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: column.id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  const { theme } = useTheme();

  return (
    <div
      style={style}
      ref={setNodeRef}
      className={`relative flex flex-col gap-3 w-80 h-fit rounded-md p-5  ${
        theme === "light" ? "bg-white" : "bg-[#1a1a1a]"
      }
      `}
    >
      <ColumnHead column={column} />
      <TaskContainer column={column} />

      <AddTaskBlock id={column.id} />

      <div
        className={`absolute top-0 left-1/2 -translate-1/2  px-2 py-3  z-0 rounded-xl lg:hover:cursor-pointer  ${
          theme === "light"
            ? "bg-white text-slate-600"
            : "bg-[#1a1a1a] text-slate-200"
        }
        `}
        {...attributes}
        {...listeners}
      >
        <DragableItemIcon />
      </div>
    </div>
  );
};

export default BoardColumn;
