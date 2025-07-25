import { useEffect } from "react";
import useBackGroundImg from "../../../../shared/use-hook/useBackGroundImg";
import PickImgItem from "./PickImgItem";

const PickImgBlock = ({ setBg }: { setBg: (value: string) => void }) => {
  const { bgImg, setForest, setMountine, setRiver, setSky } =
    useBackGroundImg();

  useEffect(() => {
    setBg(bgImg);
  }, [bgImg]);

  return (
    <div className="flex justify-between py-2">
      <PickImgItem
        url="https://i.pinimg.com/originals/a9/59/22/a9592215c9342174fb0b4d5643727247.jpg"
        setImg={setForest}
      />
      <PickImgItem
        url="https://i.pinimg.com/originals/b6/65/c3/b665c39693c925a6c4d5c415e6ae93d1.jpg"
        setImg={setMountine}
      />
      <PickImgItem
        url="https://avatars.mds.yandex.net/i?id=6afe9003dc58a345d08f85621db2475d_l-4012815-images-thumbs&n=13"
        setImg={setRiver}
      />
      <PickImgItem
        url="https://avatars.mds.yandex.net/i?id=557ea8789a278f192ff1c3ddcc00f5b3_l-5169643-images-thumbs&n=13"
        setImg={setSky}
      />
    </div>
  );
};

export default PickImgBlock;
