import { lines } from "../../../shared/constants/main-page";
import Line from "../../../shared/ui/chips/line";

const SimpleLines = () => {
  return (
    <>
      {lines.map((line) => (
        <Line key={line.id} {...line} />
      ))}
    </>
  );
};

export default SimpleLines;
