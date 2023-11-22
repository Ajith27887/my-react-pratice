import React from "react";

function AgeButton({ ageHandler }) {
  return (
    <div>
      {console.log("AgeButton is rendered")}
      <button onClick={ageHandler}>Click Me</button>
    </div>
  );
}

export default React.memo(AgeButton);
