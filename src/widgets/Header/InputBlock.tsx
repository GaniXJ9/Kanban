import useStore from "../../app/store";

function InputBlock() {
  const { theme } = useStore();
  return (
    <div className="w-1/2  h-9 flex items-center gap-5 ">
      <input
        type="text"
        className={`border w-full h-full text-white px-5 rounded-md ${
          theme === "light" ? "border-white " : "border-[#838383] "
        }`}
      />
      <button
        className={`text-white border  px-5 h-full rounded-md ${
          theme === "light"
            ? "border-white bg-gray-500 "
            : "border-[#838383]  bg-blue-950"
        }`}
      >
        Cоздать
      </button>
    </div>
  );
}

export default InputBlock;
