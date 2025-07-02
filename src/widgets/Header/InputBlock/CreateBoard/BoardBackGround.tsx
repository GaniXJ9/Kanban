import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import PickGradientBlock from "./PickGradientBlock";
import PickImgBlock from "./PickImgBlock";
import BoardRef from "./BoardRef";
import BoardTitle from "./BoardTitle";
import useBackGroundGradient from "../../../../shared/use-hook/useBackGroundGradient";
import { createBoardSchema } from "../../../../features/register/schema/createBoardSchema";
import type { CreateBoardInterface } from "../../../../features/register/types/CreateBoardInterface";
import getUsers from "../../../../shared/users/getUsers";
import type { UserType } from "../../../../features/user/UserType";

function BoardBackGround() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<CreateBoardInterface>({
    resolver: yupResolver(createBoardSchema),
  });

  const { bgGradientColor } = useBackGroundGradient();

  const [bgColor, setBgColor] = useState<string>(bgGradientColor);
  const [bgImg, setBgImg] = useState<string | null>(null);

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
    const token = localStorage.getItem("token");
    const users = await getUsers();

    const loggedUser = users.find((el: UserType) => {
      return el.token === token;
    });
    const updatedBoards = [...(loggedUser.boards || []), data];

    try {
      const res = await fetch(`http://localhost:3000/users/${loggedUser.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...loggedUser,
          boards: updatedBoards,
        }),
      });

      if (!res.ok) throw new Error("Ошибка при обновлении пользователя");

      const result = await res.json();
      localStorage.setItem("currentUser", JSON.stringify(result));
    } catch (e) {
      console.error("❌ Ошибка при отправке данных:", e);
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
          className="w-full p-1 border border-slate-300 rounded-sm  outline-none my-2"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <input type="hidden" {...register("background")} />

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-slate-800 text-white rounded"
      >
        Создать доску
      </button>
    </form>
  );
}

export default BoardBackGround;
