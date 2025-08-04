import React from "react";

type LoaderProps = {
  text?: string;
  size?: number;
  color?: string;
};

const Loader: React.FC<LoaderProps> = ({
  text = "Loading...",
  size = 48,
  color = "border-blue-500",
}) => {
  const borderSize = Math.floor(size / 8);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className={`animate-spin rounded-full border-t-4 ${color} border-solid`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${borderSize}px`,
        }}
      />
      {text && (
        <p className="text-slate-600 dark:text-slate-200 text-sm font-medium">
          {text}
        </p>
      )}
    </div>
  );
};

export default Loader;
