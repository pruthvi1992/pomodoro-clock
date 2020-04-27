import React from "react";
import "./App.css";
import Timer from "./Timer";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementsl,
  decrementsl,
  incrementbl,
  decrementbl,
} from "./actions/indexAction";

function App() {
  const breakLength = useSelector((state) => state.breakLength);
  const sessionLength = useSelector((state) => state.sessionLength);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1 id="title">Pomodoro Clock</h1>
      <div id="session-label">
        Session Length
        <div id="session-keys">
          <button
            id="session-increment"
            onClick={
              sessionLength < 60 ? () => dispatch(incrementsl()) : sessionLength
            }
          >
            +
          </button>
          <h3 id="session-length">{sessionLength}</h3>
          <button
            id="session-decrement"
            onClick={
              sessionLength > 1 ? () => dispatch(decrementsl()) : sessionLength
            }
          >
            -
          </button>
        </div>
      </div>
      <div id="break-label">
        Break Length
        <div id="break-keys">
          <button
            id="break-increment"
            onClick={
              breakLength < 60 ? () => dispatch(incrementbl()) : breakLength
            }
          >
            +
          </button>
          <h3 id="break-length">{breakLength}</h3>
          <button
            id="break-decrement"
            onClick={
              breakLength > 1 ? () => dispatch(decrementbl()) : breakLength
            }
          >
            -
          </button>
        </div>
      </div>
      <div>
        <Timer />
      </div>
    </div>
  );
}

export default App;
