interface LineProps {
  className: string;
  dotPosition: string;
}

const Line = ({ className, dotPosition }: LineProps) => {
  return (
    <div className={className}>
      <div
        className={`p-0.5 absolute rounded-full border-2 bg-white border-[#adadad] ${dotPosition}`}
      />
    </div>
  );
};

export default Line;
