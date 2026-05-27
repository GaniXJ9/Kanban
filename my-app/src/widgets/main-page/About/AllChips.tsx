import ChipsContainer from "./ChipsContainer";

const AllChips = () => {
  return (
    <>
      <div className="absolute -top-4 -translate-y-[1px]">
        <ChipsContainer gap="13px" count={6} rotate="0" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-full -translate-x-1 rotate-90">
        <ChipsContainer gap="13px" count={2} rotate="0" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-full translate-x-1 -rotate-90">
        <ChipsContainer gap="13px" count={2} rotate="0" />
      </div>
      <div className="absolute -bottom-4 translate-y-[1px]">
        <ChipsContainer gap="13px" count={6} rotate="180" />
      </div>
    </>
  );
};

export default AllChips;
