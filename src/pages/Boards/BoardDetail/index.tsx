import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useStore from "../../../app/store";
import type { ColumnType } from "../../../features/register/types/BoardType";
import BoardColumn from "../../../widgets/BorderDetail/Column/BoardColumn";
import AddColumn from "../../../widgets/BorderDetail/Column/AddColumn";
import { closestCorners, DndContext, type DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

const BoardDetail = () => {
  const { getBoard, currentBoard, updateColumnOrder, saveInServer } =
    useStore();
  const [columnOrder, setColumnOrder] = useState<ColumnType[]>([]);
  const { id } = useParams();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = columnOrder.findIndex(
      (col) => col.id === Number(active.id)
    );
    const newIndex = columnOrder.findIndex((col) => col.id === Number(over.id));

    if (oldIndex !== -1 && newIndex !== -1 && currentBoard) {
      const newOrder = arrayMove(columnOrder, oldIndex, newIndex);
      setColumnOrder(newOrder);
      updateColumnOrder(newOrder);
    }
  };

  const SaveInServer = () => {
    if (currentBoard) {
      saveInServer(currentBoard.id, columnOrder);
    }
  };

  useEffect(() => {
    if (id) {
      getBoard(id);
    }
  }, [id]);

  useEffect(() => {
    if (currentBoard) {
      setColumnOrder(currentBoard.columns);
    }
  }, [currentBoard]);

  if (!currentBoard) {
    return <p>Loading...</p>;
  }

  return (
    <section className="w-full pt-14 grid  grid-cols-4 gap-10 min-h-1/2">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <SortableContext
          items={columnOrder.map((col) => col.id)}
          strategy={horizontalListSortingStrategy}
        >
          {columnOrder.map((column: ColumnType) => (
            <BoardColumn key={column.id} column={column} />
          ))}
        </SortableContext>
      </DndContext>
      <div className=" flex flex-col gap-5 h-fit">
        <AddColumn />
        <button onClick={SaveInServer} className="bg-white py-2">
          Save Order
        </button>
      </div>
    </section>
  );
};

export default BoardDetail;
