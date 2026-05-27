const GlowedLines = () => {
  return (
    <>
      {/*Blue Glow*/}
      <div className="absolute top-1/2 -translate-y-[15px] left-1/2 p-0.5">
        <div className="blue-glow h-34 w-[35vw] relative pt-0.5 pr-0.5 rounded-tr-md   pb-0 z-10">
          <div className="absolute top-[5px] right-1 w-full h-full bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] z-20 rounded-tr-md"></div>
          <p className="border-2 border-[#adadad] rounded-tr-md  dark:bg-[rgba(29,33,37)] h-full border-b-transparent  border-l-transparent"></p>
        </div>
      </div>

      {/*Green Glow*/}
      <div className="absolute top-1/2 translate-y-1.5 left-1/2 p-0.5">
        <div className="green-glow rounded-tr-md h-32 w-64 relative z-10 pr-0.5 pt-0.5">
          <div className="absolute top-1 right-[4px] rounded-tr-md w-full h-full bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] z-20 rounded-tl-md"></div>
          <p className="z-20 border-2 border-[#adadad]   bg-[#eaf0f5] rounded-tr-md  dark:bg-[rgba(29,33,37)] h-full w-full border-b-transparent  border-l-transparent"></p>
        </div>
      </div>

      {/*Yellow Glow*/}
      <div className="absolute top-1/2 translate-y-1.5 -translate-x-[47px] right-1/2 pr-0.5 ">
        <div className="z-10 yellow-glow h-29 w-10 relative pr-[0.5px] ">
          <div className="absolute top-1 right-[3px]  rounded-tr-md w-full h-full bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] z-20 rounded-tl-md"></div>
          <p className="border-2 -z-10 border-[#adadad]  bg-[#eaf0f5]  dark:bg-[rgba(29,33,37)] h-full border-y-transparent  border-l-transparent"></p>
        </div>
      </div>

      {/*Red Glow*/}
      <div className="absolute top-1/2 translate-y-2 -translate-x-15 right-1/2 ">
        <div className="red-glow h-32 w-[25vw] relative rounded-tl-md pt-[2px] pl-[3px] pb-0 z-15 ">
          <div className="absolute top-1 left-1 w-full h-full bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] z-20 rounded-tl-md"></div>
          <p className="border-2 border-[#adadad] rounded-tl-md dark:bg-[rgba(29,33,37)] h-full border-b-transparent border-r-transparent z-0"></p>
        </div>
      </div>
    </>
  );
};

export default GlowedLines;
