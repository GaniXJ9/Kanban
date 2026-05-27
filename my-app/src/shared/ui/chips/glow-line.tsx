import type { GlowLineConfig } from "../../type/main-page";

const GlowLine = ({
  positionClass,
  glowClass,
  sizeClass,
  overlayOffsetClass,
  borderRadiusClass,
  borderClass,
}: GlowLineConfig) => {
  return (
    <div className={positionClass}>
      <div className={`relative p-0.5 ${sizeClass} ${glowClass}`}>
        <div
          className={`absolute w-full h-full bg-[#eaf0f5] dark:bg-[rgba(29,33,37)] z-20 ${overlayOffsetClass} ${borderRadiusClass}`}
        />
        <p
          className={`relative z-10 ${borderClass} h-full ${borderRadiusClass}`}
        />
      </div>
    </div>
  );
};

export default GlowLine;
