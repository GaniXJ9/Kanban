import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragOverEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { useEffect, useMemo, useState } from "react";
import useStore from "../../../app/store";
import { useParams } from "react-router-dom";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import BoardColumn from "../../../widgets/BorderDetail/Column/BoardColumn";
import { createPortal } from "react-dom";
import AddColumn from "../../../widgets/BorderDetail/Column/AddColumn";
import TaskCard from "../../../widgets/BorderDetail/Column/Tasks/TaskCard";
import useBoardStore from "../../../app/store/board/boardStore";
import type { ColumnType } from "../../../features/register/types/ColumnType";
import type { TaskType } from "../../../features/register/types/TaskType";

const BoardDetail = () => {
  const { saveInServer, theme } = useStore();
  const { currentBoard, getBoard } = useBoardStore();
  const [colums, setColumns] = useState<ColumnType[]>([]);
  const [activeColumn, setActiveColumn] = useState<ColumnType | null>(null);
  const [activeTask, setActiveTask] = useState<TaskType | null>(null);
  const { id } = useParams();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  const columsId = useMemo(() => colums?.map((col) => col.id), [colums]);

  const onDragStart = (event: DragStartEvent) => {
    const item = event.active.data.current;

    if (item?.type === "Column") {
      setActiveColumn(item.column);
      setActiveTask(null);
    }

    if (item?.type === "Task") {
      setActiveTask(item.task);
      setActiveColumn(null);
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveColumn(null);
    setActiveTask(null);

    if (!over) {
      return;
    }
    if (active.id === over.id) {
      return;
    }

    const activeType = active.data.current?.type;
    const overType = over.data.current?.type;

    if (activeType === "Column" && overType === "Column") {
      setColumns((columns) => {
        const activeIndex = columns.findIndex((col) => col.id === active.id);
        const overIndex = columns.findIndex((col) => col.id === over.id);

        return arrayMove(columns, activeIndex, overIndex);
      });
    }
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) {
      return;
    }

    const activeType = active.data.current?.type;

    if (activeType !== "Task") {
      return;
    }

    const activeTask = active.data.current?.task;
    const overTask = over.data.current?.task;
    const overColumn = over.data.current?.column;

    if (!overColumn) {
      return;
    }

    setColumns((prevColumns) => {
      const sourceColumnIndex = prevColumns.findIndex((col) =>
        col.taskList.some((task: TaskType) => task.id === activeTask.id)
      );

      const destinationColumnIndex = prevColumns.findIndex(
        (col) => col.id === overColumn.id
      );

      if (sourceColumnIndex === -1 || destinationColumnIndex === -1) {
        return prevColumns;
      }

      const sourceColumn = prevColumns[sourceColumnIndex];
      const destinationColumn = prevColumns[destinationColumnIndex];

      if (sourceColumn.id === destinationColumn.id) {
        return prevColumns;
      }

      const newSourceTasks = sourceColumn.taskList.filter(
        (task: TaskType) => task.id !== activeTask.id
      );
      const newDestinationTasks = [...destinationColumn.taskList];

      const overIndex = overTask
        ? newDestinationTasks.findIndex((task) => task.id === overTask.id)
        : newDestinationTasks.length;

      newDestinationTasks.splice(overIndex, 0, activeTask);

      const newColumns = [...prevColumns];
      newColumns[sourceColumnIndex] = {
        ...sourceColumn,
        taskList: newSourceTasks,
      };
      newColumns[destinationColumnIndex] = {
        ...destinationColumn,
        taskList: newDestinationTasks,
      };

      return newColumns;
    });
  };

  const SaveInServer = () => {
    if (currentBoard) {
      saveInServer(currentBoard.id, colums);
    }
  };

  useEffect(() => {
    if (id) {
      getBoard(id);
    }
  }, [id]);

  useEffect(() => {
    if (currentBoard) {
      setColumns(currentBoard.columns);
    }
  }, [currentBoard]);

  return (
    <section className="w-full pt-14 grid  grid-cols-4 gap-10 min-h-1/2">
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <SortableContext items={columsId}>
          {colums.map((column: ColumnType) => (
            <BoardColumn column={column} key={column.id} />
          ))}
        </SortableContext>

        {createPortal(
          <DragOverlay>
            {activeColumn && <BoardColumn column={activeColumn} />}
            {activeTask && (
              <TaskCard
                task={activeTask}
                column={{ id: -1, columnName: "", taskList: [] }}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>

      <div className=" flex flex-col gap-6 h-fit">
        <AddColumn />
        <button
          onClick={SaveInServer}
          className={`rounded-md py-2  lg:hover:cursor-pointer transition-all duration-200 ${
            theme === "light"
              ? "bg-slate-300 text-slate-600 lg:hover:bg-slate-600  lg:hover:text-slate-300  "
              : "bg-slate-600 text-slate-200 lg:hover:bg-slate-200  lg:hover:text-slate-600  "
          }`}
        >
          Save Order
        </button>
      </div>
    </section>
  );
};

export default BoardDetail;
