import useTasks from "../../../../app/store/tasks";
import CommentCard from "./comment-card";
import AddComment from "./add-comment";
import type { CommentEntity } from "../../../../features/types/comments/comment-entity";
import CommentIcon from "../../../../shared/icons/comment-icon";

const CommentsContainer = () => {
  const { currentTask } = useTasks();

  return (
    <section className="container border-b relative w-full overflow-auto lg:p-5 ">
      <p className="flex text-lg lg:text-lg text-[#3262a1] dark:text-slate-200 font-normal py-2">
        <CommentIcon />
        Comments
      </p>

      <AddComment />

      <div className="pb-24">
        {currentTask?.comments.length === 0 ? (
          <h1 className="py-4 text-lg text-[#3262a1] dark:text-slate-200">
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

export default CommentsContainer;
