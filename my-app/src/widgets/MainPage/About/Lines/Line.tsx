import React from "react";

const Line = ({ width, height }: { width; height }) => {
  return (
    <div className="border-2 border-[#adadad] w-[250px] h-24 pt-5 border-r-transparent border-b-transparent absolute left-1/2 translate-x-3 -translate-y-1/2 rounded-tl-lg">
      <div className="p-0.5 absolute rounded-full border-2 -top-1 -right-1 bg-white border-[#adadad]"></div>
    </div>
  );
};

export default Line;
