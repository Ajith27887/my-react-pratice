import React, { useMemo, useState } from "react";

function UseMemoHooks() {
  let [countOne, setCountOne] = useState(0);
  let [countTwo, setCountTwo] = useState(0);

  const CountOneHandler = () => {
    setCountOne(countOne + 1);
  };
  const CountTwoHandler = () => {
    setCountTwo(countTwo + 1);
  };

  //* Skipping expensive recalculations on every render.
  //*(Exmaple : Fetching thousands of Items mapping that array and filtering that array)
  //* useMemo is used to cache the value of a function.
  //* It is used to prevent the re-rendering of a component.
  //* It is used to improve the performance of a component.
  // * It is used to performence optimization.

  const DoubleNumber = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countOne * 2;
  }, [countOne]);

  return (
    <div>
      <button onClick={CountOneHandler}>Count : {countOne}</button> <br></br>
      <span>DoubleNumber : {DoubleNumber}</span>
      <br></br>
      <button onClick={CountTwoHandler}>Count : {countTwo}</button>
    </div>
  );
}

export default UseMemoHooks;
