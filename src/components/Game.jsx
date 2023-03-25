import React, { useState } from "react";
import { calculateWinner } from "../helpers";
import Board from "./Board";
import "../style.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const [clase, setclase] = useState("");

  const handleClick = (i) => {
    const boardCopy = [...board];
    //if user click an ocupied square or if game is won, return.
    if (boardCopy[i]) setclase(i);
    if (winner || boardCopy[i]) return;
    //put an X or an O in the clicked square.
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button className="button-65" onClick={() => setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} clase={clase} win={winner} />
      <div className="gamediv animate__animated animate__bounceInLeft">
        <h1>Tic Tac Toe</h1>
        <p>
          {winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
