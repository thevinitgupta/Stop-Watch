import React from "react";

function Snap({ id, value }) {
  return (
    <div className="Snap">
      <div>{id + "."}</div>
      <div>{value}</div>
    </div>
  );
}

export default Snap;
