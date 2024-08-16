// Square.tsx
import React from "react";
import OComponent from "../elements/OComponent";

interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="square w-[40px] h-[40px] border-2 border-black text-[1.2rem] font-bold cursor-pointer"
      onClick={onSquareClick}
    >
      {value === "O" ? <OComponent /> : value}
    </button>
  );
}

export default Square;
