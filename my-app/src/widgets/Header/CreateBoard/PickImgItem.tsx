const PickImgItem = ({ url, setImg }: { url: string; setImg: () => void }) => {
  return (
    <p
      className={`h-14 w-16 rounded-sm shadow lg:hover:cursor-pointer bg-cover bg-center`}
      style={{ backgroundImage: `url(${url})` }}
      onClick={setImg}
    ></p>
  );
};

export default PickImgItem;
