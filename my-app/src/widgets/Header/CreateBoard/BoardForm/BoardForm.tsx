import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import BoardRef from "./BoardRef";
import useBackGroundGradient from "../../../../shared/use-hook/useBackGroundGradient";
import useBoards from "../../../../app/store/boards";
import useUsers from "../../../../app/store/users";
import { board, type BoardDataForm } from "../../../../features/boards/schema";
import PrimaryButton from "../../../../shared/ui/buttons/PrimaryButton";
import type { ColumnEntity } from "../../../../features/types/columns/ColumnEntity";
import BackgroundSettings from "./BackgroundSettings";
import BoardNameField from "./BoardNameField";

const defaultColumns: ColumnEntity[] = [
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

  useEffect(() => {
    if (bgImg) {
      setValue("background", bgImg);
    } else if (bgColor) {
      setValue("background", bgColor);
    }
  }, [bgColor, bgImg, setValue]);

  return (
    <form className="w-full p-2 " onSubmit={handleSubmit(onSubmit)}>
      <BoardRef bgColor={bgColor} bgImg={bgImg} />
      <BackgroundSettings
        register={register}
        fillGradientInput={fillGradientInput}
        fillBackgroundImageInput={fillBackgroundImageInput}
        setBgImg={setBgImg}
      />
      <BoardNameField title="Name" register={register} error={errors.name} />
      <PrimaryButton text="Create Board" padding="px-4 py-2" size={"w-full"} />
    </form>
  );
};

export default BoardForm;
