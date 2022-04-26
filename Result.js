import React, { useState, useRef, useEffect } from "react";

const Result = ({ signs }) => {
  const [result, setResult] = useState(null);
  const resultRef = useRef();
  
  function getTypes() {
     let code=signs.join("").toUpperCase()
  console.log(code)
   fetch("https://raw.githubusercontent.com/N0vum/Heroes-test/main/Types")
      .then((response) => response.json())
      .then((data) =>
        setResult(
          <div className="result">
            <h1>{data[code].role}</h1>
            <p>{data[code].description}</p>
          </div>
        )
      )
   
  }
  function turnOut() {
     setResult(null);
     signs.length = 0;
     window.scrollTo(0, 0);
    window.location.reload() 
    }

  useEffect(() => {
    if (!resultRef) {
      return;
    }
    if (result != null)
      resultRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    
  }, [result]);

  return (
    <div ref={resultRef}>
      <div className="btnsRes">
        <button className="res" onClick={getTypes}>
          Result
        </button>
        <button className="res" onClick={turnOut}>
          Reset
        </button>
      </div>
      <div className="showResult">{result}</div>
    </div>
  );
};

export default Result;
