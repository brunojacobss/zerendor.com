import React from "react";

function SubTitle(props) {
  return (
    <div>
      <div className="mt-4 flex flex-row justify-between">
        <p className="text-[#EDFFFF]">+ {props.subtitle}:</p>
        <p className="text-[#EDFFFF]">{props.date}</p>
      </div>
    </div>
  );
}

export default SubTitle;
