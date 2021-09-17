import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <h2>show/hide</h2>

      <button className="btn" onClick={() => setshow(!show)}>
        Show and Hide Button
      </button>

      {show && <Item />}
    </div>
  );
};

const Item = () => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Window</h1>
      <h1 style={{ color: "Blue" }}>Size</h1>
    </div>
  );
};

export default ShowHide;
