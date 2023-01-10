import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./helpers";

const styles = {
  width: "200px",
  margin: "20px auto"
};

const startingBoard = () => Array(9).fill(null);
const Game = () => {
  const [board, setBoard] = useState(startingBoard());
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    // If user click an occupied square or if game is won, return
    if (winner || board[i]) return;
    // Put X or an O in the clicked square
    board[i] = xIsNext ? "X" : "O";
    setBoard(board);
    setXisNext(!xIsNext);
  };

  const reset = () => {
    setBoard(startingBoard());
    setXisNext(true);
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        <button onClick={() => reset()}>START GAME</button>
      </div>
    </>
  );
};

export default Game;
