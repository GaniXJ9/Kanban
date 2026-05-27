import useStore from "../../../../app/store";
import CommentIcon from "../../../../shared/icons/CommentIcon";
import CommentInput from "./CommentInput";
import CommentsContainer from "./Comments";

const CommentsBlock = () => {
  const { theme } = useStore();

  return (
    <div
      className={`border-l h-full  lg:w-full py-5 px-5 ${
        theme === "light"
          ? "border-[#1a1a1a] bg-slate-400"
          : "border-gray-300 bg-[#1a1a1a]"
      }`}
    >
      <h2
        className={`text-xl flex items-center gap-2 ${
          theme === "light" ? "text-slate-800" : "text-slate-300"
        }`}
      >
        <span>
          <CommentIcon />
        </span>
        Comments
      </h2>
      <CommentInput />
      <CommentsContainer />
    </div>
  );
};

export default CommentsBlock;
