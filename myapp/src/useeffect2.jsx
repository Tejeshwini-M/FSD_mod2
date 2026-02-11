// useeffect2.jsx
import React, { useState, useEffect } from "react";

function Useeffect2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // Runs whenever count changes

  return (
    <div>
      <h2>useEffect Example 2</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Useeffect2;