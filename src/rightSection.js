import React from "react";
import "./rightSection.css";

const RandomText = ({ text }) => {
  return (
    <div className="right-section">
      <h1 className="random">{text}</h1>
    </div>
  );
};

export default RandomText;
