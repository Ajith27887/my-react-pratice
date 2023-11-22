import React from "react";

function SalaryButton({ Salaryhandler }) {
  return (
    <div>
      {console.log("SalaryButton is rendered")}
      <button onClick={Salaryhandler}>Click Me</button>
    </div>
  );
}

export default React.memo(SalaryButton);
