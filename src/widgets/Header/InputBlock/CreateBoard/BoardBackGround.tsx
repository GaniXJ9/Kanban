import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import PickGradientBlock from "./PickGradientBlock";
import PickImgBlock from "./PickImgBlock";
import BoardRef from "./BoardRef";
import BoardTitle from "./BoardTitle";
import useBackGroundGradient from "../../../../shared/use-hook/useBackGroundGradient";
import useTheme from "../../../../shared/use-hook/useTheme";
import useStore from "../../../../app/store";
import { createBoardSchema } from "../../../../features/register/schema/createBoardSchema";
import type { CreateBoardInterface } from "../../../../features/register/types/CreateBoardInterface";

const BoardBackGround = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<CreateBoardInterface>({
    resolver: yupResolver(createBoardSchema),
  });
  const { theme } = useTheme();
  const { bgGradientColor } = useBackGroundGradient();
  const [bgColor, setBgColor] = useState<string>(bgGradientColor);
  const [bgImg, setBgImg] = useState<string | null>(null);
  const { setCurrentBoard, setCurrentUser, currentUser } = useStore();
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

  const onSubmit = async (data: CreateBoardInterface) => {
    if (!currentUser) {
      return null;
    }

    const newBoard = {
      ...data,
      user: currentUser.token,
      columns: [
        {
          id: 1,
          columnName: "Done",
          taskList: [],
        },
        {
          id: 2,
          columnName: "To Do",
          taskList: [],
        },
        {
          id: 3,
          columnName: "In process",
          taskList: [],
        },
      ],
    };

    try {
      const res = await fetch("http://localhost:3000/boards", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBoard),
      });
      const boardData = await res.json();
      const updatedUser = {
        ...currentUser,
        boards: [...(currentUser.boards || []), boardData.id],
      };
      if (!res.ok) {
        throw new Error("Ошибка создания доски");
      }

      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      setCurrentUser(updatedUser);
      setCurrentBoard(boardData);
      navigate(`/boards/${boardData.id}`);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form className="w-full p-2" onSubmit={handleSubmit(onSubmit)}>
      <BoardRef bgColor={bgColor} bgImg={bgImg} />
      <div className="flex flex-col justify-between py-3">
        <BoardTitle title="Background" />
        <PickImgBlock setBg={fillBackgroundImageInput} />
        <PickGradientBlock setBg={fillGradientInput} setBgImg={setBgImg} />
        {errors.background && (
          <p className="text-red-500 text-sm mt-1">
            {errors.background.message}
          </p>
        )}
      </div>
      <div className="py-3">
        <BoardTitle title="Board name" />
        <input
          className={`w-full p-1 border border-slate-300 rounded-sm outline-none my-2 ${
            theme === "light" ? "text-slate-600" : "text-slate-200"
          }`}
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>
      <input type="hidden" {...register("background")} />
      <button
        type="submit"
        className={`mt-4 px-4 py-2 text-white rounded w-full lg:hover:cursor-pointer transition-all duration-200 ${
          theme === "light"
            ? "bg-slate-500 lg:hover:bg-slate-200 lg:hover:text-slate-600"
            : "bg-slate-700 lg:hover:bg-slate-200 lg:hover:text-slate-600"
        }`}
      >
        Create Board
      </button>
    </form>
  );
};

export default BoardBackGround;
