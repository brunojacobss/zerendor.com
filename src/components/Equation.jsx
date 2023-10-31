import React from "react";

function Equation(props) {
  return (
    <div className="flex flex-row justify-between uppercase">
      <div className="flex-1 text-left pr-2">{props.type}</div>
      <div className="flex-none px-2">=</div>
      <div className="flex-1 text-right pl-2">{props.attribute}</div>
    </div>
  );
}

export default Equation;
