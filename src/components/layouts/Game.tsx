// Game.tsx
import React, { useState, useEffect } from "react";
import Board from "../fragments/Board";
import { calculateWinner, computerMove } from "../elements/Utils";

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isComputerTurn, setIsComputerTurn] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  useEffect(() => {
    if (isComputerTurn && !calculateWinner(currentSquares)) {
      const nextSquares = computerMove(currentSquares);
      if (nextSquares) {
        setTimeout(() => {
          handlePlay(nextSquares);
          setIsComputerTurn(false);
        }, 500);
      }
    }
  }, [isComputerTurn]);

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleSquareClick(index: number) {
    if (currentSquares[index] || calculateWinner(currentSquares)) return;

    const nextSquares = currentSquares.slice();
    nextSquares[index] = "X";
    handlePlay(nextSquares);
    setIsComputerTurn(true);
  }

  const winner = calculateWinner(currentSquares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const moves = history.map((squares, move) => {
    let description = move > 0 ? "Go to move #" + move : "Go to game start";

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
    setIsComputerTurn(nextMove % 2 !== 0);
  }

  return (
    <div className="game flex">
      <div className="game-board">
        <Board squares={currentSquares} onSquareClick={handleSquareClick} />
        <span>{status}</span>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
