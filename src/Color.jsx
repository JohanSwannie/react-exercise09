import React from "react";

const Color = ({ hex, description, setBackgroundColor }) => {
  return (
    <div
      style={{ backgroundColor: hex, padding: "1rem" }}
      onClick={() => setBackgroundColor(hex)}
    >
      <h2 id={description}>{description}</h2>
    </div>
  );
};

export default Color;