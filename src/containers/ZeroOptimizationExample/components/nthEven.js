import React from "react";
import { suffixOf, calculateEven } from "../../../utils/math";

function NthEven({ count, increment }) {
  const even = calculateEven(count);

  return (
    <>
      <div className="container">
        <h2>Nth Even</h2>
        <p>
          The <b>{suffixOf(count)}</b> prime number is <b>{even}</b>
        </p>
        <button className="btn btn-secondary" onClick={increment}>
          Next Number
        </button>
      </div>
    </>
  );
}

export default NthEven;
