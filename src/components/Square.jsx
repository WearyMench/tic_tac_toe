import React from "react";
import "../style.css";

const Square = ({ value, onClick, clase1, clase2 }) => {
  let cl = `square ${clase1} ${clase2}`;
  return (
    <button className={cl} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
