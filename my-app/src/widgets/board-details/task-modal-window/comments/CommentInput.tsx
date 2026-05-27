import { useState } from "react";
import useStore from "../../../../app/store";
import CommentAddIcon from "../../../../shared/icons/CommentAddIcon";
import { useForm } from "react-hook-form";
// import useUsers from "../../../../app/store/users";
// import useBoards from "../../../../app/store/boards";

const CommentInput = () => {
  const [focused, setFocused] = useState(false);
  const { theme } = useStore();
  // const { currentBoard, currentTask, addComment } = useBoards();
  // const { currentUser } = useUsers();

  const {
    register,
    // handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  // const onSubmit = (data: any) => {
  //   if (!currentTask || !currentUser) return;

  //   const comment: CommentType = {
  //     id: Date.now(),
  //     taskId: currentTask.id,
  //     commentDate: new Date(),
  //     user: currentUser,
  //     ...data,
  //   };

  //   if (currentBoard) {
  //     addComment(comment, currentBoard.id);
  //     reset();
  //   }
  // };

  return (
    <form /*onSubmit={handleSubmit(onSubmit)}*/ className="relative">
      <button
        type="submit"
        className={`absolute top-1 right-8 transition-all duration-200 flex items-center justify-center h-full 
          ${
            focused
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 z-10"
          }
          ${theme === "light" ? "text-slate-600" : "text-slate-200"}
        `}
      >
        <CommentAddIcon />
      </button>

      <input
        {...register("commentText", {
          required: {
            value: true,
            message: "Comment must contain at least 1 symbol",
          },
        })}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Leave a comment"
        className={`w-full h-10 my-4 rounded-md border px-3 outline-none 
          ${
            theme === "light"
              ? "bg-slate-300 border-slate-800 text-slate-600"
              : "bg-[#25272a] border-slate-300 text-slate-300"
          }
        `}
      />
      {errors.commentText && (
        <p className="text-red-500 text-sm mt-1">
          {String(errors.commentText.message)}
        </p>
      )}
    </form>
  );
};

export default CommentInput;
