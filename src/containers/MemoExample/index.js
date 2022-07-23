import React, { useState } from "react";
import NthPrime from "./components/nthPrime";
import NthFib from "./components/nthFib";
import NthOdd from "./components/nthOdd";
import NthEven from "./components/nthEven";

export default function MemoMain() {
  const [nthEven, setNthEven] = useState(1);
  const [nthOdd, setNthOdd] = useState(1);
  const [nthPrime, setNthPrime] = useState(1);
  const [nthFib, setNthFib] = useState(1);

  const reset = () => {
    setNthEven(1);
    setNthFib(1);
    setNthOdd(1);
    setNthPrime(1);
  };

  const incrementByTen = () => {
    setNthEven((prev) => prev + 10);
    setNthFib((prev) => prev + 10);
    setNthOdd((prev) => prev + 10);
    setNthPrime((prev) => prev + 10);
  };

  const incrementEven = () => {
    setNthEven((prev) => prev + 1);
  };

  const incrementOdd = () => {
    setNthOdd((prev) => prev + 1);
  };

  const incrementPrime = () => {
    setNthPrime((prev) => prev + 1);
  };

  const incrementFib = () => {
    setNthFib((prev) => prev + 1);
  };

  return (
    <>
      <div className="container mt-4">
        <h1 className="mb-5 text-center">The React Memo Example</h1>
        <button className="btn btn-primary" onClick={incrementByTen}>
          Add 10
        </button>
        <button
          className="btn btn-primary"
          style={{ marginLeft: "20px" }}
          onClick={reset}
        >
          Reset
        </button>
      </div>
      <hr />
      <NthFib count={nthFib} increment={incrementFib} />
      <hr />
      <NthPrime count={nthPrime} increment={incrementPrime} />
      <hr />
      <NthEven count={nthEven} increment={incrementEven} />
      <hr />
      <NthOdd count={nthOdd} increment={incrementOdd} />
    </>
  );
}
