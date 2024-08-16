export function calculateWinner(squares: (string | null)[]): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  export function computerMove(squares: (string | null)[]): (string | null)[] | null {
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        const nextSquares = squares.slice();
        nextSquares[i] = "O";
        if (calculateWinner(nextSquares) === "O") {
          return nextSquares;
        }
      }
    }
  
    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        const nextSquares = squares.slice();
        nextSquares[i] = "X";
        if (calculateWinner(nextSquares) === "X") {
          nextSquares[i] = "O";
          return nextSquares;
        }
      }
    }
  
    const emptySquares = squares
      .map((value, index) => (value === null ? index : null))
      .filter((value) => value !== null) as number[];
  
    if (emptySquares.length > 0) {
      const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
      const nextSquares = squares.slice();
      nextSquares[randomIndex] = "O";
      return nextSquares;
    }
  
    return null;
  }
  