import React from "react";
import { suffixOf, calculateFib } from "../../../utils/math";

function NthFib({ count, increment }) {
  const fib = calculateFib(count);

  return (
    <>
      <div className="container">
        <h2>Nth Fib</h2>
        <p>
          The <b>{suffixOf(count)}</b> prime number is <b>{fib}</b>
        </p>
        <button className="btn btn-secondary" onClick={increment}>
          Next Number
        </button>
      </div>
    </>
  );
}

export default NthFib;
