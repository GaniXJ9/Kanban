import useStore from "../../app/store";
import type { CreateBoardInterface } from "../../features/register/types/CreateBoardInterface";
const BoardCard = ({ el }: { el: CreateBoardInterface }) => {
  const { theme } = useStore();
  return (
    <div
      className={`rounded-md max-h-60  flex flex-col  ${
        theme === "light"
          ? "bg-slate-100  shadow-md"
          : "bg-[#1a1a1a] border border-[#585858]"
      }`}
    >
      <div
        className={` rounded-t-md w-full h-3/4  bg-cover bg-center`}
        style={{
          background: el.background,
          backgroundImage: `url(${el.background})`,
        }}
      ></div>

      <h1
        className={`text-md p-2  ${
          theme === "light" ? "text-slate-600" : "text-slate-200"
        }`}
      >
        {el.title}
      </h1>
    </div>
  );
};

export default BoardCard;
