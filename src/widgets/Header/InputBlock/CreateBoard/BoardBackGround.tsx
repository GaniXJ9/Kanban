// import { useEffect, useState } from "react";
// import PickGradientBlock from "./PickGradientBlock";
// import PickImgBlock from "./PickImgBlock";
// import BoardRef from "./BoardRef";
// import useBackGroundGradient from "../../../../shared/use-hook/useBackGroundGradient";
// // import useStore from "../../../../app/store";
// import { useForm } from "react-hook-form";
// import BoardTitle from "./BoardTitle";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { createBoardSchema } from "../../../../features/register/schema/createBoardSchema";
// import type { CreateBoardInterface } from "../../../../features/register/types/CreateBoardInterface";

// function BoardBackGround() {
//   // const { theme } = useStore();

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     setValue,
//   } = useForm({ resolver: yupResolver(createBoardSchema) });
//   const { bgGradientColor } = useBackGroundGradient();
//   const [bgColor, setBgColor] = useState<string>(bgGradientColor);
//   const [bgImg, setBgImg] = useState<string | null>(null);

//   useEffect(() => {
//     if (bgImg) {
//       setValue("background", bgImg);
//     } else if (bgColor) {
//       setValue("background", bgColor);
//     }
//   }, [bgColor, bgImg, setValue]);

//   const onSubmit = (data: CreateBoardInterface) => {
//     console.log(data);
//   };
//   return (
//     <form className="w-full p-2" onSubmit={handleSubmit(onSubmit)}>
//       <BoardRef bgColor={bgColor} bgImg={bgImg} />

//       <div className="flex flex-col justify-between py-3">
//         <BoardTitle title={"Background"} />

//         <PickImgBlock setBg={setBgImg} />
//         <PickGradientBlock setBg={setBgColor} setBgImg={setBgImg} />
//       </div>

//       <div>
//         <BoardTitle title={"Board name"} />
//         <input
//           className="w-full p-1 border bg-white outline-none"
//           {...register("title")}
//         />
//       </div>
//     </form>
//   );
// }

// export default BoardBackGround;

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

  // Автоматически устанавливаем значение background в форму
  useEffect(() => {
    if (bgImg) {
      setValue("background", bgImg);
    } else if (bgColor) {
      setValue("background", bgColor);
    }
  }, [bgColor, bgImg, setValue]);

  const onSubmit = (data: CreateBoardInterface) => {
    console.log("✅ Успешно отправлено:", data);
  };

  const fillGradientInput = (color: string) => {
    setBgColor(color);
    setBgImg(null);
    setValue("background", color);
  };
  const fillBackgroundImageInput = (img: string) => {
    setBgImg(img);
    setValue("background", img);
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
