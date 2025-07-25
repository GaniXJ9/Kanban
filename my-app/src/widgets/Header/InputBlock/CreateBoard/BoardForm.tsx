import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import PickGradientBlock from "./PickGradientBlock";
import PickImgBlock from "./PickImgBlock";
import BoardRef from "./BoardRef";
import BoardTitle from "./BoardTitle";
import useBackGroundGradient from "../../../../shared/use-hook/useBackGroundGradient";
import useBoards from "../../../../app/store/boards";
import useUsers from "../../../../app/store/users";
import { board, type BoardDataForm } from "../../../../features/boards/schema";

const BoardForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<BoardDataForm>({
    resolver: yupResolver(board),
  });
  const { bgGradientColor } = useBackGroundGradient();
  const [bgColor, setBgColor] = useState<string>(bgGradientColor);
  const [bgImg, setBgImg] = useState<string | null>(null);
  const { createBoard } = useBoards();
  const { currentUser } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    if (bgImg) {
      setValue("background", bgImg);
    } else if (bgColor) {
      setValue("background", bgColor);
    }
  }, [bgColor, bgImg, setValue]);

  const fillGradientInput = (color: string) => {
    setBgColor(color);
    setBgImg(null);
    setValue("background", color);
  };

  const fillBackgroundImageInput = (img: string) => {
    setBgImg(img);
    setValue("background", img);
  };

  const onSubmit = async (data: BoardDataForm) => {
    if (!currentUser) {
      return null;
    }
    const defaultColumns = [
      {
        id: 1,
        name: "To Do",
        tasks: [],
      },
      {
        id: 2,
        name: "Done",
        tasks: [],
      },
      {
        id: 3,
        name: "In Proccess",
        tasks: [],
      },
    ];
    const id = crypto.randomUUID();
    const newBoard = {
      id: id,
      userToken: currentUser.token,
      columns: [...defaultColumns],
      ...data,
    };

    createBoard(newBoard);

    navigate(`/boards/${newBoard.id}`);
  };
  return (
    <form className="w-full p-2" onSubmit={handleSubmit(onSubmit)}>
      <BoardRef bgColor={bgColor} bgImg={bgImg} />
      <div className="flex flex-col justify-between py-3">
        <BoardTitle title="Background" />
        <PickImgBlock setBg={fillBackgroundImageInput} />
        <PickGradientBlock setBg={fillGradientInput} setBgImg={setBgImg} />
      </div>
      <div className="py-3">
        <BoardTitle title="Board name" />
        <input
          className={`w-full p-1 border border-slate-300 rounded-sm outline-none my-2 text-slate-600 dark:text-slate-200`}
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>
      <input type="hidden" {...register("background")} />
      <button
        type="submit"
        className={`mt-4 px-4 py-2 text-white rounded w-full lg:hover:cursor-pointer transition-all duration-200 bg-slate-500 dark:bg-slate-700 lg:hover:bg-slate-200 lg:hover:text-slate-600`}
      >
        Create Board
      </button>
    </form>
  );
};

export default BoardForm;
