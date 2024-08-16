// Board.tsx
import React from "react";
import Square from "./Square";

interface BoardProps {
  squares: (string | null)[];
  onSquareClick: (index: number) => void;
}

function Board({ squares, onSquareClick }: BoardProps) {
  return (
    <div className="p-[20px] flex flex-col gap-[10px]">
      <div className="flex flex-wrap w-[120px] h-[120px]">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onSquareClick={() => onSquareClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
