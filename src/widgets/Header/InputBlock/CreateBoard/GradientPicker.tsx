function GradientPicker({
  gradient,
  setColor,
}: {
  gradient: string;
  setColor: () => void;
}) {
  const gradientStyle = {
    background: gradient,
  };
  return (
    <p
      className="h-6 w-8 rounded-sm shadow lg:hover:cursor-pointer"
      style={gradientStyle}
      onClick={setColor}
    ></p>
  );
}

export default GradientPicker;
