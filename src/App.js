import React, { useState } from "react";
import Timer from "./Timer.js";
import "./styles.css";
import Controls from "./Controls.js";
import Snaps from "./Snaps.js";

export default function App() {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [snaps, setSnaps] = useState([]);

  function handleStart() {
    if (secs > 0 || mins > 0) {
      setSecs(0);
      setMins(0);
    }
    window.startId = setInterval(startClock, 1000);
  }
  function handleStop() {
    clearInterval(window.startId);
    addSnap();
  }
  function startClock() {
    setSecs((prevVal) => {
      if (prevVal < 59) {
        return prevVal + 1;
      } else {
        setSecs(0);
        setMins((prevVal) => {
          return prevVal + 1;
        });
      }
    });
  }

  function addSnap() {
    setSnaps((prevVal) => {
      return [...prevVal, `${mins} mins ${secs} secs`];
    });
  }
  return (
    <div className="App">
      <header>
        <h1>My Stop Watch</h1>
      </header>

      <Timer mins={mins} secs={secs} />
      <Controls
        handleStart={handleStart}
        handleStop={handleStop}
        addSnap={addSnap}
      />
      <Snaps snapsArr={snaps} />
    </div>
  );
}
