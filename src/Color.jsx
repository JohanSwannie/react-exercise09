import React from "react";

const Color = ({ hex, description, setBackgroundColor }) => {
  return (
    <div
      style={{
        backgroundColor: hex,
        padding: "1rem",
        border: "2px solid #FFF",
      }}
      onClick={() => setBackgroundColor(hex)}
    >
      <h3 id={description}>{description}</h3>
    </div>
  );
};

export default Color;
