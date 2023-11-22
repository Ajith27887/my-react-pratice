import React from "react";

function HigherOrderFn() {
  // * A Function that returns a function as result.
  //* Example 1
  const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const MuiltipleNum = Num.map((num) => num * 2).filter((num) => num > 10);
  console.log(MuiltipleNum);

  // *Fetching data from an API
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));

  //* Example 2
  //* function that takes another function as an argument
  function add(a, b) {
    console.log(a + b);
  }
  setTimeout(add, 3000, 5, 5);

  return (
    <div>
      <h3> Higher Order Function</h3>
      {/* <p>
        Conclusion : Higher Order Functions provide a higher level of
        abstraction for functions.
      </p> */}
    </div>
  );
}

export default HigherOrderFn;
