import React from "react";
import "./Snaps.css";
import Snap from "./Snap.js";

function Snaps({ snapsArr }) {
  return (
    <div className="Snaps">
      {snapsArr.length > 0 && <h2>Snaps:</h2>}
      {snapsArr.length > 0 &&
        snapsArr.map((snap, index) => (
          <Snap key={index} id={index + 1} value={snap} />
        ))}
    </div>
  );
}

export default Snaps;
