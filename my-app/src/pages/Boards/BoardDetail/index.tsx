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
import { useParams } from "react-router-dom";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import BoardColumn from "../../../widgets/BorderDetail/Column/BoardColumn";
import { createPortal } from "react-dom";
import AddColumn from "../../../widgets/BorderDetail/Column/AddColumn";
import TaskCard from "../../../widgets/BorderDetail/Column/Tasks/TaskCard";
import useColumns from "../../../app/store/columns";
import type { ColumnEntity } from "../../../features/types/columns/ColumnEntity";
import useBoards from "../../../app/store/boards";
import type { TaskEntity } from "../../../features/types/tasks/TaskEntity";
import useTasks from "../../../app/store/tasks";

const BoardDetail = () => {
  const [activeColumn, setActiveColumn] = useState<ColumnEntity | null>(null);
  const [activeTask, setActiveTask] = useState<TaskEntity | null>(null);
  const { currentBoard, getBoard } = useBoards();
  const { columns, setColumns, updateColumnOrder } = useColumns();
  const { updateTaskOrder } = useTasks();
  const { id } = useParams();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const columsId = useMemo(() => columns?.map((col) => col.id), [columns]);

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

    if (!over || active.id === over.id) return;

    const activeType = active.data.current?.type;
    const overType = over.data.current?.type;

    if (activeType === "Column" && overType === "Column") {
      const activeIndex = columns.findIndex((col) => col.id === active.id);
      const overIndex = columns.findIndex((col) => col.id === over.id);

      if (activeIndex === -1 || overIndex === -1) return;

      const newColumnOrder = arrayMove(columns, activeIndex, overIndex);
      setColumns(newColumnOrder);
      updateColumnOrder(newColumnOrder);
    }

    if (activeType === "Task") {
      const newOrder = useColumns.getState().columns;

      if (currentBoard) {
        updateTaskOrder(newOrder, currentBoard);
      }
    }
  };

  const onDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (!over) return;

    const activeType = active.data.current?.type;

    if (activeType !== "Task") return;

    const activeTask = active.data.current?.task;
    const overTask = over.data.current?.task;
    const overColumn = over.data.current?.column;

    if (!activeTask || !overColumn) return;

    const columnsFromStore = useColumns.getState().columns;

    const sourceColumnIndex = columnsFromStore.findIndex((col) =>
      col.tasks.some((task) => task.id === activeTask.id)
    );
    const destinationColumnIndex = columnsFromStore.findIndex(
      (col) => col.id === overColumn.id
    );

    if (sourceColumnIndex === -1 || destinationColumnIndex === -1) return;

    const sourceColumn = columnsFromStore[sourceColumnIndex];
    const destinationColumn = columnsFromStore[destinationColumnIndex];

    if (destinationColumn.tasks.some((task) => task.id === activeTask.id)) {
      return;
    }

    const newSourceTasks = sourceColumn.tasks.filter(
      (task) => task.id !== activeTask.id
    );
    const newDestinationTasks = [...destinationColumn.tasks];

    const overIndex = overTask
      ? newDestinationTasks.findIndex((task) => task.id === overTask.id)
      : newDestinationTasks.length;

    newDestinationTasks.splice(overIndex, 0, activeTask);

    const newColumns = [...columnsFromStore];
    newColumns[sourceColumnIndex] = {
      ...sourceColumn,
      tasks: newSourceTasks,
    };
    newColumns[destinationColumnIndex] = {
      ...destinationColumn,
      tasks: newDestinationTasks,
    };

    if (currentBoard) {
      useTasks.getState().updateTaskOrder(newColumns, currentBoard);
    }
    setColumns(newColumns);
  };

  useEffect(() => {
    if (id) getBoard(id);
  }, [id]);

  useEffect(() => {
    if (currentBoard) {
      setColumns(currentBoard?.columns);
    }
  }, [currentBoard, currentBoard?.columns]);

  if (!columns) {
    return <h1>loading</h1>;
  }

  return (
    <section className="w-full pt-14 grid grid-cols-1 lg:grid-cols-4  gap-6 min-h-1/2">
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <SortableContext items={columsId}>
          {columns.map((column: ColumnEntity) => (
            <BoardColumn column={column} key={column.id} />
          ))}
        </SortableContext>
        {createPortal(
          <DragOverlay>
            {activeColumn && <BoardColumn column={activeColumn} />}
            {activeTask && (
              <TaskCard
                task={activeTask}
                column={{ id: -1, name: "", tasks: [] }}
              />
            )}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      <div className="flex flex-col gap-6 h-fit">
        <AddColumn />
      </div>

      {/* {currentTask && <TaskModal />} */}
    </section>
  );
};

export default BoardDetail;
