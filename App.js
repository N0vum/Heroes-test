import React from "react";
import Block from "./Block";
import heroes from "./Heroes";
import coloredTitle from "./Title";

function App() {

  return (
    <div className="main">
      <h1><pre>{coloredTitle}</pre></h1>
      {Object.entries(heroes).map((block) => (
        <Block key={block[0]} data={block[1]} />
      ))}
    </div>
  );
}

export default App;
