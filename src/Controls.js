import React from "react";
import "./Controls.css";

function Controls({ handleStart, handleStop, addSnap }) {
  return (
    <div className="Controls">
      <button className="Controls__btn" id="start" onClick={handleStart}>
        Start
      </button>
      <button className="Controls__btn" id="stop" onClick={handleStop}>
        Stop
      </button>
      <button className="Controls__btn" id="snap" onClick={addSnap}>
        Snap
      </button>
    </div>
  );
}

export default Controls;
