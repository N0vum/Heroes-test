import React, { useRef } from "react";
import Card from "./Card";
import useHover from "./useHover";
import Button from "./Button";

const Block = ({ data, signs }) => {
  const { h2, ...pairOfHeroes } = data;
  const blockRef = useRef();
  const {isHovered, png} = useHover(blockRef);

  return (
    <div ref={blockRef}>
      <h3>{h2}</h3>
            <div className="block" >
        {Object.entries(pairOfHeroes).map((hero) => (
          <div>
          <label><Card key={hero[0]} data={hero[1]} isHovered={isHovered} png={png} signs={signs} /></label>
                   </div>
            ))}
      </div>
      <Button data={data} isHovered={isHovered} png={png} signs={signs} />
    </div>
  );
};

export default Block;
