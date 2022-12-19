import React from "react";
import Square from "./Square";
import "../style.css";

const Board = ({ squares, onClick, clase, win }) => {
  let cl;
  return (
    <div className="board animate__animated animate__bounceInUp">
      {squares.map((square, i) => {
        if (clase === i) {
          cl = "animate__animated animate__headShake";
        } else if (win) cl = "animate__animated animate__heartBeat";
        else cl = undefined;

        return (
          <Square
            key={i}
            value={square}
            onClick={() => onClick(i)}
            clase={cl}
          />
        );
      })}
    </div>
  );
};
export default Board;
