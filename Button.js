import React, {useRef} from "react";

const Button=({png, signs, isHovered, data})=>{
    const disabled = isHovered ? false : true;
    const { h2, ...pairOfHeroes } = data;
    const pairOfHeroesMap=Object.entries(pairOfHeroes)
    const radioRef = useRef();
    const getSign=()=>{
  png()
  signs.push(data[2])

  }

  return(<form>{
    pairOfHeroesMap.map(hero=>
  <input ref={radioRef} key={hero[2]} type="radio" disabled={disabled} 
  className="btn" onClick={()=>getSign()} name={hero[2]} value={hero[2]}></input>
)}
  </form> )
}

export default Button;