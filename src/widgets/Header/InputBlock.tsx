function InputBlock() {
  return (
    <div className="w-1/2  h-9 flex items-center gap-5 ">
      <input
        type="text"
        className="border border-white w-full h-full text-white px-5 rounded-md"
      />
      <button className="text-white border border-white px-5 h-full rounded-md bg-gray-500">
        Cоздать
      </button>
    </div>
  );
}

export default InputBlock;
