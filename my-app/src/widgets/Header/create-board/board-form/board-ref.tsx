interface BoardRefProps {
  bgImg: string | null;
  bgColor: string;
}

const columns = [
  {
    bg: "#d6d6fb",
    cards: 2,
    height: "full",
  },
  {
    bg: "#dad6d6",
    cards: 1,
    height: "1/2",
  },
  {
    bg: "#f5e4e4",
    cards: 2,
    height: "full",
  },
];

const BoardRef = ({ bgImg, bgColor }: BoardRefProps) => {
  const blockStyle = bgImg
    ? { backgroundImage: `url(${bgImg})` }
    : { background: bgColor };

  return (
    <div
      className="p-5 w-full h-48 rounded-sm shadow-md bg-cover bg-center flex justify-between items-start"
      style={blockStyle}
    >
      {columns.map((column, index) => (
        <div
          key={index}
          className={`w-1/4 p-2 h-${column.height} rounded-md`}
          style={{ background: column.bg }}
        >
          {Array.from({ length: column.cards }).map((_, cardIndex) => (
            <p
              key={cardIndex}
              className="w-full py-5 my-2 rounded-md shadow-sm border border-slate-100 bg-white"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BoardRef;
