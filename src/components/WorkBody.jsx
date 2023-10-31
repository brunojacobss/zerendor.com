import React from "react";

function WorkBody(props) {
  return (
    <div>
      <div className="mt-4 flex flex-col space-y-4">
        <p className="text-[#EDFFFF]">{props.body}</p>
        <p className="text-[#EDFFFF]">Enjoy.</p>
      </div>
    </div>
  );
}

export default WorkBody;
