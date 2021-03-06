import React, { useState } from "react";
import "./App.css";
import Counter from "./counter.js";

/**
 * 1. Create component Counter which will have:
 * - button with class {increment}
 * - button with class {decrement}
 * - h1 element which will represent state value
 * - state should hold {counter} value(default value = 0)
 * - with buttons you should be able to in/decrement {counter} value
 *
 * 2. In App component add button with class {newCounter}
 * 3. when you click {newCounter} you should add new counter to view
 *
 * NOTE: feel free to add some CSS to style your counters.
 */

const App = () => {
  const [getter, setter] = useState([]);

  const eventHandler = () => {
    setter(getter.concat(<Counter />));
  };

  return (
    <div className="App">
      <button className="newCounter" onClick={eventHandler}>
        CLICK ME
      </button>
      {getter}
    </div>
  );
};

export default App;
