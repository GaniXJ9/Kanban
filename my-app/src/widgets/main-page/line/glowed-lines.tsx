import { glowLines } from "../../../shared/constants/main-page";
import GlowLine from "../../../shared/ui/chips/glow-line";

const GlowedLines = () => {
  return (
    <>
      {glowLines.map((line, i) => (
        <GlowLine key={i} {...line} />
      ))}
    </>
  );
};

export default GlowedLines;
