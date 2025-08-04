import useTasks from "../../../../app/store/tasks";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import type { CommentEntity } from "../../../../features/types/comments/CommentEntity";

const Comments = () => {
  const { currentTask } = useTasks();

  return (
    <section className="container border-b relative w-full overflow-auto lg:p-5 ">
      <p className="border-b text:lg lg:text-2xl text-slate-600 dark:text-slate-200 font-medium py-2">
        Comments
      </p>

      <AddComment />

      <div className="pb-24">
        {currentTask?.comments.length === 0 ? (
          <h1 className="py-4 text-lg text-slate-600 dark:text-slate-200">
            There is no comments
          </h1>
        ) : (
          <div className="flex flex-col-reverse gap-10">
            {currentTask?.comments.map((comment: CommentEntity) => (
              <>
                <CommentCard comment={comment} key={comment.id} />
              </>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Comments;
