import React  from "react";
import {useState} from "react"

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((counterIncrement)=> counterIncrement + 1)
  }

  return <div onClick={increment}>{count}</div>;
}

export default Counter