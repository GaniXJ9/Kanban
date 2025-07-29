import React from "react";

const PrimaryButton = ({
  text,
  size,
  onClick,
}: {
  text: string;
  size: number;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className={`size-${size}`}>
      {text}
    </button>
  );
};

export default PrimaryButton;
