import React from "react";

const NowWatching = (props) => {
  return (
    <div>
      <p className="text-[#EDFFFF]/50 text-md video-cond-regular">
        +Now Watching: {props.worktitle} @ zerendor.com
      </p>
    </div>
  );
};

export default NowWatching;
