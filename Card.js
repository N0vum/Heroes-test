import React from "react";

const Card = ({ data, isHovered }) => {
  const src = isHovered ? data[0] : data[1];
  const size = isHovered ? "9.5" : "4";
  return (
    <div className="card">
      <div className="hero">
        <img
          src={src}
          alt="hero"
          style={{ width: `${size}rem`, height: `${size}rem` }}
        />
      </div>
      <button className="btn"></button>
    </div>
  );
};

export default Card;
