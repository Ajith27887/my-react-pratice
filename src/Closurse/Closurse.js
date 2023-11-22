import React from "react";

// * closure is a function that has access to the parent scope, even after the scope has closed.
//* A function bind together with its lexical environment, that is called closure.
//* we can also return a function from a function.
// *even if the function is executed outside that scope. it remembers the variables that are declared inside the parent scope.

{
  function x() {
    var a = 10;
    function y() {
      console.log(a);
    }
    return y;
  }
  var z = x();
  z();
}
function Closurse() {
  return <div>Closurse</div>;
}

export default Closurse;
