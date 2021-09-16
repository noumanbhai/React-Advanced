import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("First");
    document.title = `${count}`;
  });
  console.log("lst");
  return (
    <>
      <h2>useEffect Basics</h2>
      <h2>{count}</h2>
      <button className="btn" onClick={() => setcount(count + 1)}>
        Click me
      </button>
    </>
  );
};

export default UseEffectBasics;
