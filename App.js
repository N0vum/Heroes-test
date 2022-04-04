import React from "react";
import Block from "./Block";
import heroes from "./Heroes";
import coloredTitle from "./Title";
import Result from "./Result";

function App() {
const signs=[];

  return (
    <div className="main">
      <h1><pre>{coloredTitle}</pre></h1>
      {Object.entries(heroes).map((block) => (
        <Block key={block[0]} data={block[1]} signs={signs}  />
      ))}
      <Result signs={signs} />
    </div>
  );
}

export default App;
