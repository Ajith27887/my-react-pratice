import React from "react";

function AgeCount({ Age }) {
  return (
    <div>
      {console.log("Age is rendered")}
      <p>Age : {Age}</p>
    </div>
  );
}

export default React.memo(AgeCount);
