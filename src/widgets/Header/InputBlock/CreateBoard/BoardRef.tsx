function BoardRef({
  bgImg,
  bgColor,
}: {
  bgImg: string | null;
  bgColor: string;
}) {
  const blockStyle = bgImg
    ? { backgroundImage: `url(${bgImg})` }
    : { background: bgColor };
  return (
    <div
      className={`p-5 w-full h-48 rounded-sm shadow-md bg-cover bg-center flex justify-between items-start`}
      style={blockStyle}
    >
      <div className="w-1/4 p-2 h-full  bg-[#d6d6fb] rounded-md">
        <p className="w-full py-5 my-2 rounded-md shadow-sm border border-slate-100 bg-white"></p>
        <p className="w-full py-5 my-2 rounded-md shadow-sm border border-slate-100 bg-white"></p>
      </div>
      <div className="w-1/4 p-2 h-1/2  bg-[#dad6d6] rounded-md">
        <p className="w-full py-5 my-2 rounded-md shadow-sm border border-slate-100 bg-white"></p>
      </div>{" "}
      <div className="w-1/4 p-2 h-full  bg-[#f5e4e4] rounded-md">
        <p className="w-full py-5 my-2 rounded-md shadow-sm border border-slate-100 bg-white"></p>
        <p className="w-full py-5 my-2 rounded-md shadow-sm border border-slate-100 bg-white"></p>
      </div>
    </div>
  );
}

export default BoardRef;
