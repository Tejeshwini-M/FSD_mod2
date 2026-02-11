// useeffect1.jsx
import React, { useEffect } from "react";

function Useeffect1() {
  useEffect(() => {
    console.log("Component Mounted!");

    // Optional cleanup
    return () => {
      console.log("Component Unmounted!");
    };
  }, []); // Empty dependency array = runs once

  return (
    <div>
      <h2>useEffect Example 1</h2>
      <p>Check console to see mount message.</p>
    </div>
  );
}

export default Useeffect1;