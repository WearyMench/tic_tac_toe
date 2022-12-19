import React from "react";
import Square from "./Square";
import "../style.css";

const Board = ({ squares, onClick, clase, win }) => {
  let cl1;
  let cl2;

  return (
    <div className="board animate__animated animate__bounceInUp">
      {squares.map((square, i) => {
        if (win) {
          cl2 = "animate__animated animate__heartBeat";
        }

        if (clase === i) {
          cl1 = "animate__animated animate__headShake";
        } else cl1 = undefined;

        return (
          <Square
            key={i}
            value={square}
            onClick={() => onClick(i)}
            clase1={cl1}
            clase2={cl2}
          />
        );
      })}
    </div>
  );
};
export default Board;
