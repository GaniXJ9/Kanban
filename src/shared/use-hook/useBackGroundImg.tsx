import { useState } from "react";

function useBackGroundImg() {
  const [bgImg, setBgImg] = useState<string>(
    "https://i.pinimg.com/originals/a6/2d/90/a62d90c4feb5b064003dd453f8e779c4.jpg"
  );

  const setForest = () => {
    setBgImg(
      "https://i.pinimg.com/originals/a6/2d/90/a62d90c4feb5b064003dd453f8e779c4.jpg"
    );
  };
  const setMountine = () => {
    setBgImg(
      "https://i.pinimg.com/originals/92/13/cf/9213cfd73f7076aa237c427f766deb4c.jpg"
    );
  };
  const setRiver = () => {
    setBgImg(
      "https://avatars.mds.yandex.net/i?id=bdfd1aac58c81e2851240c649922d617_l-5221533-images-thumbs&n=13"
    );
  };
  const setSky = () => {
    setBgImg(
      "https://images.wallpaperscraft.ru/image/single/vozdushnyj_shar_aerostat_art_128614_2560x1600.jpg"
    );
  };

  return { bgImg, setForest, setMountine, setRiver, setSky };
}

export default useBackGroundImg;
