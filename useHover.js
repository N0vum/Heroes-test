import { useState, useEffect } from "react";

export default function useHover(blockRef) {
  const [isHovered, setIsHovered] = useState(false);

  const gif = () => setIsHovered(true);
  const png = () => setIsHovered(false);

  useEffect(() => {
      if (!blockRef) {
      return;
    }

    const node = blockRef.current;
    node.addEventListener("mouseenter", gif);
    node.addEventListener("mouseleave", png);

    return () => {
      node.removeEventListener("mouseenter", gif);
      node.removeEventListener("mouseleave", png);
    };
  },[]);

  return isHovered;
}
