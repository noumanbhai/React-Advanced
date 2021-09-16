import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setsize] = useState(window.innerWidth);

  const checkSize = () => {
    setsize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", setsize);
    };
  });

  return (
    <div>
      <h2>useEffect cleanup</h2>
      <h3>{size}</h3>
    </div>
  );
};

export default UseEffectCleanup;
