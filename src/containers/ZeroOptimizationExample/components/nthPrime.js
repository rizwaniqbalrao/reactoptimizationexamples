import React from "react";
import { suffixOf, calculatePrime } from "../../../utils/math";

function NthPrime({ count, increment }) {
  const prime = calculatePrime(count);

  return (
    <>
      <div className="container">
        <h2>Nth Prime</h2>
        <p>
          The <b>{suffixOf(count)}</b> prime number is <b>{prime}</b>
        </p>
        <button className="btn btn-secondary" onClick={increment}>
          Next Number
        </button>
      </div>
    </>
  );
}

export default NthPrime;
