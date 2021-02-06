import React from "react";
import "./Timer.css";

function Timer({ mins, secs }) {
  return (
    <div className="Timer">
      <div className="Timer__minutes">{mins > 0 ? mins : "00"}</div>
      <div className="Timer__seconds">{secs > 0 ? secs : "00"}</div>
    </div>
  );
}

export default Timer;
