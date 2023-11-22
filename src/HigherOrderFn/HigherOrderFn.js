import React from "react";

function HigherOrderFn() {
  // * Higher Order Function is a  returns a function as a result.
  //* Example 1
  const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const MuiltipleNum = Num.map((num) => num * 2).filter((num) => num > 10);
  console.log(MuiltipleNum);

  //* Example 2
  //* function that takes another function as an argument
  function add(a, b) {
    console.log(a + b);
  }
  setTimeout(add, 3000, 5, 5);

  return <div>HigherOrderFn</div>;
}

export default HigherOrderFn;
