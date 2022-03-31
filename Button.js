import React, { useState } from "react";

const Button = ({ png, signs, isHovered, data }) => {
  const disabled = isHovered ? false : true;
  const { h2, ...pairOfHeroes } = data;
  const pairOfHeroesMap = Object.values(pairOfHeroes);
  const [check, setCheck] = useState(false);

  const handleChange = (event) => {
    setCheck(true);
    png();
    signs.push(event.target.value);
  };

  return (
    <form>
      {pairOfHeroesMap.map((hero) => (
        <input
          key={hero[2]}
          type="radio"
          disabled={disabled}
          checked={check}
          className="option-input radio"
          onClick={handleChange}
          name={hero[2]}
          value={hero[2]}
        ></input>
      ))}
    </form>
  );
};

export default Button;
