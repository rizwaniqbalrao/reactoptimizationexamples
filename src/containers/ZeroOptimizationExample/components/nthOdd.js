import React from "react";
import { suffixOf, calculateOdd } from "../../../utils/math";

function NthOdd({ count, increment }) {
  const odd = calculateOdd(count);

  return (
    <>
      <div className="container">
        <h2>Nth Odd</h2>
        <p>
          The <b>{suffixOf(count)}</b> prime number is <b>{odd}</b>
        </p>
        <button className="btn btn-secondary" onClick={increment}>
          Next Number
        </button>
      </div>
    </>
  );
}

export default NthOdd;
