import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  console.log(refContainer);
  return (
    <form className="form" onSubmit={handlerSubmit}>
      <div>
        <input type="text" ref={refContainer} />
        <button className="btn" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default UseRefBasics;
