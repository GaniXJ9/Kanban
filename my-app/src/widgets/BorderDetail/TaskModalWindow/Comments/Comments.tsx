import { useState, type ChangeEvent } from "react";
import useComments from "../../../../app/store/comments";
import useTasks from "../../../../app/store/tasks";
import type { CommentEntity } from "../../../../features/types/comments/CommentEntity";
import useUsers from "../../../../app/store/users";
import useBoards from "../../../../app/store/boards";
import useColumns from "../../../../app/store/columns";
import CommentCard from "./CommentCard";

const Comments = () => {
  const [value, setValue] = useState<string>("");
  const { currentBoard } = useBoards();
  const { currentUser } = useUsers();
  const { currentTask } = useTasks();
  const { currentColumn } = useColumns();
  const { addComment } = useComments();

  const handleAddComment = () => {
    if (currentUser && currentBoard && currentColumn && currentTask) {
      const newComment: CommentEntity = {
        id: crypto.randomUUID(),
        text: value,
        date: new Date(),
        user: currentUser,
      };

      addComment(currentBoard, currentColumn, currentTask, newComment);
      setValue(" ");
    }
  };

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <section className="w-full overflow-auto p-5  pb-20">
      <p className="border-b text-2xl text-slate-600 dark:text-slate-200 font-medium py-2">
        Comments
      </p>

      <div className="py-5 flex flex-col items-end gap-2">
        <textarea
          required
          placeholder="Leave a comment"
          className="bg-slate-300 text-slate-600
         dark:text-slate-200 dark:bg-[#535252] border border-slate-600 dark:border-[#c7c7c7]
          resize-none w-full p-3 rounded-lg"
          onChange={onChange}
          value={value}
        />
        <button
          className="text-sm font-medium py-3 px-6 border rounded-lg bg-slate-300 text-slate-600 uppercase
         dark:text-slate-200 dark:bg-slate-700
         
         lg:hover:bg-slate-600 lg:hover:text-slate-300 
         lg:hover:dark:text-slate-700 lg:hover:dark:bg-slate-200
         lg:cursor-pointer"
          onClick={handleAddComment}
        >
          Send
        </button>
      </div>

      <div>
        {currentTask?.comments.length === 0 ? (
          <h1 className="py-4 text-lg text-slate-600 dark:text-slate-200">
            There is no comments
          </h1>
        ) : (
          <div className="flex flex-col gap-10">
            {currentTask?.comments.map((comment: CommentEntity) => (
              <CommentCard comment={comment} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Comments;
