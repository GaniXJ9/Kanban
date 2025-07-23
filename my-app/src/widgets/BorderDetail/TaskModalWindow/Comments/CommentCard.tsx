import type { CommentEntity } from "../../../../features/types/comments/CommentEntity";

const CommentCard = ({ comment }: { comment: CommentEntity }) => {
  return (
    <div className="w-full h-20 ">
      <div className="border p-2 ">
        {/* <h1 className="text-slate-200">{comment.commentText}</h1> */}
      </div>
    </div>
  );
};

export default CommentCard;
