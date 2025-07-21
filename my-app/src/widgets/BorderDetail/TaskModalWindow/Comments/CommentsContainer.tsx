import useBoardStore from "../../../../app/store/board/boardStore";

const CommentsContainer = () => {
  const { currentTask } = useBoardStore();

  return (
    <section className="mt-4">
      {currentTask?.comments?.map((comment) => (
        <h1 key={comment.id}>{comment.commentText}</h1>
      ))}
    </section>
  );
};

export default CommentsContainer;
