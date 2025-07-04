import { useState } from "react";

const useBackGroundImg = () => {
  const [bgImg, setBgImg] = useState<string>(
    "https://i.pinimg.com/originals/a9/59/22/a9592215c9342174fb0b4d5643727247.jpg"
  );

  const setForest = () => {
    setBgImg(
      "https://i.pinimg.com/originals/a9/59/22/a9592215c9342174fb0b4d5643727247.jpg"
    );
  };
  const setMountine = () => {
    setBgImg(
      "https://i.pinimg.com/originals/b6/65/c3/b665c39693c925a6c4d5c415e6ae93d1.jpg"
    );
  };
  const setRiver = () => {
    setBgImg(
      "https://avatars.mds.yandex.net/i?id=6afe9003dc58a345d08f85621db2475d_l-4012815-images-thumbs&n=13"
    );
  };
  const setSky = () => {
    setBgImg(
      "https://avatars.mds.yandex.net/i?id=557ea8789a278f192ff1c3ddcc00f5b3_l-5169643-images-thumbs&n=13"
    );
  };

  return { bgImg, setForest, setMountine, setRiver, setSky };
};

export default useBackGroundImg;
