import React, { useRef } from "react";
import Card from "./Card";
import useHover from "./useHover";

const Block = ({ data }) => {
  const { h2, ...pairOfHeroes } = data;
  const blockRef = useRef();
  const isHovered = useHover(blockRef);

  return (
    <div>
      <p>{h2}</p>
      <div className="block" ref={blockRef}>
        {Object.entries(pairOfHeroes).map((hero) => (
          <Card key={hero[0]} data={hero[1]} isHovered={isHovered} />
        ))}
      </div>
    </div>
  );
};

export default Block;
