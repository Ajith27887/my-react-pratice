// import { useCallback } from "react";
import React, { useCallback, useState } from "react";
import AgeCount from "./AgeCount";
import AgeButton from "./AgeButton";
import SalaryCount from "./SalaryCount";
import SalaryButton from "./SalaryButton";

function UseCallbacksHooks() {
  let [Age, setAge] = useState(20);
  let [Salary, setSalary] = useState(15000);

  //* useCallback is used Skipping the  re-rendering of the component
  //* usecallbacks caches Provided function instance itself.
  // * when the state of the component is changed.
  // * memoized version of the callback that only changes if one of the dependencies has changed.
  // * It is used to performence optimization.

  let ageHandler = useCallback(() => {
    setAge(Age + 1);
  }, [Age]);

  let Salaryhandler = useCallback(() => {
    setSalary(Salary + 1000);
  }, [Salary]);

  return (
    <div>
      <h3>UseCallback Hook</h3>
      <AgeCount Age={Age} />
      <AgeButton ageHandler={ageHandler} />
      <SalaryCount Salary={Salary} />
      <SalaryButton Salaryhandler={Salaryhandler} />
    </div>
  );
}

export default UseCallbacksHooks;
