import React from "react";

//* A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// * closure is a function that has access to the parent scope, even after the scope has closed.
//* we can also return a function from a function.
// *even if the function is executed outside that scope. it remembers the variables that are declared inside the parent scope.

// * Example 1
{
  //* gobal scope
  function x() {
    let w = 100;
    const a = 10;
    //* lexical environment
    function y() {
      // * local scope
      console.log(a);
      console.log(w);
      // var w = 10;
    }
    y();
    console.log(w);
  }
  x();
}
// * Example 2
function outside(num) {
  var rememberedVar = num; //* In this example, rememberedVar is the lexical environment that the closure 'remembers'
  return function inside() {
    console.log(rememberedVar); //* We can acces the outer scope variable 'rememberedVar' inside the inner function 'inside'
  };
}
var remember1 = outside(7);
var remember2 = outside(9);

remember1();
remember2();
// console.log(num);

function Closurse() {
  return (
    <div>
      <h3> Closurse</h3>
    </div>
  );
}

export default Closurse;
