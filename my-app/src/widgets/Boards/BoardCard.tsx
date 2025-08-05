import { useNavigate } from "react-router-dom";
import type { BoardEntity } from "../../features/types/boards/BoardEntity";
import useBoards from "../../app/store/boards";
import { useState } from "react";
import UpdateInput from "../../shared/ui/inputs/UpdateInput";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BoardCard = ({ board }: { board: BoardEntity }) => {
  const [value, setValue] = useState<string>(board.name);
  const { loadingId, updateName } = useBoards();
  const navigate = useNavigate();

  const navigateToBorderDetail = () => {
    navigate(`/boards/${board.id}`);
  };

  const handleUpdate = () => {
    updateName(board.id, value);
  };

  return (
    <div
      className={`relative  rounded-md min-h-36 lg:min-h-44 flex flex-col lg:hover:cursor-pointer bg-slate-100 shadow-md dark:bg-[#1a1a1a] dark:border border-[#585858]`}
    >
      <div
        className={`lg:hover:opacity-50 rounded-t-md w-full h-3/4 bg-cover bg-center transition-all duration-200`}
        style={{
          background: board.background,
          backgroundImage: `url(${board.background})`,
        }}
        onClick={navigateToBorderDetail}
      ></div>

      <div className="p-2">
        {loadingId === board.id ? (
          <SkeletonTheme
            baseColor="rgb(0,0,0,0.2)"
            highlightColor="rgb(0,0,0,0.1)"
          >
            <Skeleton height={20} />
          </SkeletonTheme>
        ) : (
          <UpdateInput
            handleUpdate={handleUpdate}
            defFalue={value}
            setValue={setValue}
          />
        )}
      </div>
    </div>
  );
};

export default BoardCard;
