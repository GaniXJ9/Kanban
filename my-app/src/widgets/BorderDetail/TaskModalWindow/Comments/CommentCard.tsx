import useBoards from "../../../../app/store/boards";
import useColumns from "../../../../app/store/columns";
import useComments from "../../../../app/store/comments";
import useTasks from "../../../../app/store/tasks";
import type { CommentEntity } from "../../../../features/types/comments/CommentEntity";
import useDateFormat from "../../../../shared/use-hook/useDateFormat";

const CommentCard = ({ comment }: { comment: CommentEntity }) => {
  const { currentBoard } = useBoards();
  const { currentColumn } = useColumns();
  const { currentTask } = useTasks();
  const { deleteComment } = useComments();
  const date = useDateFormat(comment.date);

  const handleDelete = () => {
    if (currentBoard && currentColumn && currentTask) {
      deleteComment(currentBoard, currentColumn, currentTask, comment.id);
    }
  };

  return (
    <div className="w-full h-20 rounded-lg my-3">
      <div className="flex p-2">
        <p className="size-12 bg-green-400 flex items-center justify-center rounded-full ring-2 ring-green-700">
          <span className="text-slate-200 uppercase font-medium text-xl">
            {comment.user.username[0]}
          </span>
        </p>
        <div className="flex items-end justify-between w-full">
          <p className="mx-2 flex flex-col">
            <span className="text-lg font-medium text-slate-600 dark:text-slate-200">
              {comment.user.username}
            </span>
            <span className="text-xs font-medium text-slate-600 dark:text-slate-200">
              {comment.user.email}
            </span>
          </p>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-200">
            ({date})
          </p>
        </div>
      </div>
      <h1 className="border border-[#585858] text-slate-600 dark:text-slate-200 bg-slate-300 dark:bg-[#222222]  p-2 rounded-lg">
        {comment.text}
      </h1>
      <button
        onClick={handleDelete}
        className="font-normal text-xs underline text-slate-600 dark:text-slate-200 lg:hover:text-slate-400 lg:cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
};

export default CommentCard;
