import React from "react";

function SalaryCount({ Salary }) {
  return (
    <div>
      {console.log("Salary rendered")}
      <p>{Salary}</p>
    </div>
  );
}

export default React.memo(SalaryCount);
