import { useEffect } from "react";
import useBackGroundImg from "../../../../shared/use-hook/useBackGroundImg";
import PickImgItem from "./PickImgItem";

function PickImgBlock({ setBg }: { setBg: (value: string) => void }) {
  const { bgImg, setForest, setMountine, setRiver, setSky } =
    useBackGroundImg();

  useEffect(() => {
    setBg(bgImg);
    console.log(bgImg);
  }, [bgImg]);
  return (
    <div className="flex justify-between py-2">
      <PickImgItem
        url="https://i.pinimg.com/originals/a6/2d/90/a62d90c4feb5b064003dd453f8e779c4.jpg"
        setImg={setForest}
      />
      <PickImgItem
        url="https://i.pinimg.com/originals/92/13/cf/9213cfd73f7076aa237c427f766deb4c.jpg"
        setImg={setMountine}
      />
      <PickImgItem
        url="https://avatars.mds.yandex.net/i?id=bdfd1aac58c81e2851240c649922d617_l-5221533-images-thumbs&n=13"
        setImg={setRiver}
      />
      <PickImgItem
        url="https://images.wallpaperscraft.ru/image/single/vozdushnyj_shar_aerostat_art_128614_2560x1600.jpg"
        setImg={setSky}
      />
    </div>
  );
}

export default PickImgBlock;
