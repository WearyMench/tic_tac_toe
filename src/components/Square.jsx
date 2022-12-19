import React from "react";
import "../style.css";

const Square = ({ value, onClick, clase }) => {
  let cl = `square ${clase}`;
  return (
    <button className={cl} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
