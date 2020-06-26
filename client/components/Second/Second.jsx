import * as React from "react";
import sideImage from './trash.jpeg';

export default function Second() {
  return (
    <div className="second screen">
      <img id="image" src={sideImage}></img>
      <div id="textBox">
        <h1 className="text title">A Groundbreaking</h1>
        <h1 className="text">Concept</h1>
        <h3 className="text story">
          The Story of MK's Ultra Bar began in the tumultuous summer of 2020.
        </h3>
        <h3 className="text">
          The bar's founders, Mel and Kristie, were mighty bored...
        </h3>
      </div>
    </div>
  );
}
