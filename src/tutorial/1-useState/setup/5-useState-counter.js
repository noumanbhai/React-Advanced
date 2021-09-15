import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setcount] = useState(0);

  const Increment = () => {
    setcount(count + 1);
  };
  const Decrement = () => {
    setcount(count - 1);
  };
  const Reset = () => {
    setcount(0);
  };

  return (
    <div>
      <h2>{count} </h2>
      <button className="btn" onClick={Increment}>
        Increment
      </button>

      <button className="btn" onClick={Decrement}>
        Decrement
      </button>

      <button className="btn" onClick={Reset}>
        Resset
      </button>
    </div>
  );
};

export default UseStateCounter;
