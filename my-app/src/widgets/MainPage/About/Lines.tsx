const Lines = () => {
  return (
    <>
      <div className="border-2 border-[#adadad] w-[250px] h-24 pt-5 border-r-transparent border-b-transparent absolute left-1/2 translate-x-3 -translate-y-1/2 rounded-tl-lg">
        <div className="p-0.5 absolute rounded-full border-2 -top-1 -right-1 bg-white border-[#adadad]"></div>
      </div>
      <div className="border-[#adadad] border-2 h-[150px] border-r-transparent border-b-transparent absolute left-1/2 -translate-x-2 -translate-y-10 rounded-lg">
        <div className="p-0.5 absolute rounded-full border-2 -top-1 -right-1 bg-white border-[#adadad]"></div>
      </div>
      <div className="border-[#adadad] border-2 h-[100px] border-r-transparent border-b-transparent absolute left-1/2 translate-x-3 bottom-1/2 translate-y-25">
        <div className=" border-[#adadad] p-0.5 absolute rounded-full border-2 -bottom-1 -right-1 bg-white"></div>
      </div>
      <div className="border-[#adadad] border-2 w-[430px] h-10 border-r-transparent border-t-transparent absolute right-1/2 -translate-x-20  bottom-1/2 -translate-y-2 rounded-b-lg">
        <div className="p-0.5 absolute rounded-full border-2 -top-1 -left-1 bg-white border-[#adadad]"></div>
      </div>
      <div className="absolute top-1/2 translate-y-2.5 right-1/2">
        <div className="red-glow  h-28 w-[300px] relative rounded-md pt-0.5 pl-0.5 pb-0 z-10">
          <p className="border-2 border-[#adadad] rounded-md  shadow-[5px_5px_0_2px_black] bg-[#eaf0f5] h-full border-b-transparent  border-r-transparent  z-0"></p>
        </div>
      </div>
    </>
  );
};

export default Lines;
