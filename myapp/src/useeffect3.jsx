// useeffect3.jsx
import React, { useState, useEffect } from "react";

function Useeffect3() {
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("Component Rendered");
  }); // No dependency array = runs on every render

  return (
    <div>
      <h2>useEffect Example 3</h2>
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>You typed: {value}</p>
    </div>
  );
}

export default Useeffect3;