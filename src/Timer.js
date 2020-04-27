import React, { useEffect, useState } from "react";
import "./Timer.css";
import { useSelector, useDispatch } from "react-redux";
import { playToggle, resetsl, resetbl } from "./actions/indexAction";

function Timer() {
  const timer = useSelector((state) => state.timer);
  const sessionLength = useSelector((state) => state.sessionLength * 60); // session in seconds
  const breakLength = useSelector((state) => state.breakLength * 60); // break in seconds
  const [seconds, setSeconds] = useState(sessionLength);
  const [resetTimer, setResetTimer] = useState(sessionLength);
  let count = 0;

  const dispatch = useDispatch();

  let resetClick = () => {
    // Get a new value every time
    dispatch(resetsl());
    dispatch(resetbl());
    setSeconds(sessionLength);
    setResetTimer((value) => value + 1);
  };
  useEffect(() => {
    // Set the timer to use the latest value when the session length changes.
    setSeconds(sessionLength);
  }, [sessionLength]);

  useEffect(() => {
    // Perform a side effect
    if (timer) {
      // Only run the timer when timer is truthy
      let timerFunction = () => {
        setSeconds((seconds) => seconds - 1);
      };
      console.log("timer is playing");
      const refreshIntervalID = setInterval(timerFunction, 1000);
      return () => {
        // Clean up timer before effect runs again (or on unmount)
        clearInterval(refreshIntervalID);
      };
    }
    // Restart timer whenever timer, sessionLength, or resetTimer changes
  }, [timer, resetTimer]);

  useEffect(() => {
    // If the timer has elapsed, stop the timer and reset.
    if (seconds <= 0) {
      if (count / 2 == 0) {
        setSeconds(breakLength);
        count++;
      } else {
        setSeconds(sessionLength);
        count++;
      }
    }
  }, [seconds, dispatch, breakLength, sessionLength]);

  return (
    <div id="timer">
      <h1 id="timer-label">
        {count / 2 == 0 ? "Session Length" : "Break Length"}
      </h1>
      <h1 id="time-left">
        {Math.floor(seconds / 60) < 10
          ? "0" + Math.floor(seconds / 60)
          : Math.floor(seconds / 60)}
        :{seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60}
      </h1>
      <div id="buttons">
        <button id="start_stop" onClick={() => dispatch(playToggle())}>
          PLAY/PAUSE
        </button>
        <button id="reset" onClick={resetClick}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default Timer;
