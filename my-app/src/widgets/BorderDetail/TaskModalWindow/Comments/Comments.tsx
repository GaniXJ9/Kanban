import useTasks from "../../../../app/store/tasks";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import type { CommentEntity } from "../../../../features/types/comments/CommentEntity";

const Comments = () => {
  const { currentTask } = useTasks();

  return (
    <section className="relative w-full overflow-auto p-5  pb-20">
      <p className="border-b text-2xl text-slate-600 dark:text-slate-200 font-medium py-2">
        Comments
      </p>

      <AddComment />

      <div>
        {currentTask?.comments.length === 0 ? (
          <h1 className="py-4 text-lg text-slate-600 dark:text-slate-200">
            There is no comments
          </h1>
        ) : (
          <div className="flex flex-col-reverse gap-10">
            {currentTask?.comments.map((comment: CommentEntity) => (
              <CommentCard comment={comment} key={comment.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Comments;
