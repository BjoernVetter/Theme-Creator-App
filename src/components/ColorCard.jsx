import React from "react";
import "./ColorCard.css";

const ColorCard = ({ hex, role }) => {
  return (
    <div className="color-card" style={{ backgroundColor: hex }}>
      <p><strong>{role}</strong></p>
      <p>{hex}</p>
    </div>
  );
};

export default ColorCard;
