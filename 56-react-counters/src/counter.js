import React, { useState } from "react";
import "./App.css";



const Counter = () => {
  
  const [counter, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>You clicked {counter} times</h1>
      <button className='btn' onClick={() => setCount(counter + 1)}>+</button>

      <button className='btn' onClick={() => setCount(counter - 1)}>-</button>
    </div>
  );
};

export default Counter

