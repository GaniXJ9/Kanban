import { useNavigate } from "react-router-dom";
import type { BoardEntity } from "../../features/types/boards/BoardEntity";

const BoardCard = ({ el }: { el: BoardEntity }) => {
  const navigate = useNavigate();

  const navigateToBorderDetail = () => {
    navigate(`/boards/${el.id}`);
  };

  return (
    <div
      onClick={navigateToBorderDetail}
      className={`relative group rounded-md min-h-36 lg:min-h-44 flex flex-col lg:hover:cursor-pointer bg-slate-100 shadow-md dark:bg-[#1a1a1a] dark:border border-[#585858]`}
    >
      <div
        className={`lg:group-hover:opacity-50 rounded-t-md w-full h-3/4 bg-cover bg-center transition-all duration-200`}
        style={{
          background: el.background,
          backgroundImage: `url(${el.background})`,
        }}
      ></div>

      <h1 className={`text-md p-2 text-slate-600 dark:text-slate-200`}>
        {el.title}
      </h1>
    </div>
  );
};

export default BoardCard;
