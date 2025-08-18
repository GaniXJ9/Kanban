import clsx from "clsx";
import Chip from "./Chip";

const ChipsContainer = ({
  count,
  rotate,
  gap,
}: {
  count: number;
  rotate: string;
  gap: string;
}) => {
  return (
    <div className={clsx("flex -z-10")} style={{ gap: gap }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            transform: `rotate(${
              Array.isArray(rotate) ? rotate[i] || 0 : rotate
            }deg)`,
          }}
        >
          <Chip />
        </div>
      ))}
    </div>
  );
};

export default ChipsContainer;
