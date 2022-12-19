import React from "react";
import Square from "./Square";
import "../style.css";

const Board = ({ squares, onClick }) => (
  <div className="board animate__animated animate__bounceInUp">
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);
export default Board;
