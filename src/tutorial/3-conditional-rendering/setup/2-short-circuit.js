import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const name = "";
  const [text, settext] = useState(name);
  const [isError, setisError] = useState(false);
  // console.log(text);
  // const firstVlue = text || "This is first value";
  // const secndValue = text && "This is 2nd value";

  return (
    <div>
      <h2>short circuit</h2>;
      <br />
      {/* <h3>value1:{firstVlue}</h3>
      <h3>value2:{secndValue}</h3> */}
      <h3>{text || "Enter your name:"}</h3>
      <h3>{!text && "Hello:"}</h3>
      <button className="btn" onClick={() => setisError(!isError)}>
        Toggle Button
      </button>
      {/* {isError && <h1>Error....</h1>} */}
      {isError ? (
        <h1>There is error....</h1>
      ) : (
        <div>
          <h1>There is work</h1>
        </div>
      )}
    </div>
  );
};

export default ShortCircuit;
