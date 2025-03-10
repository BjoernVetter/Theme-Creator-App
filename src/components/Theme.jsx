import { useState } from "react";
import React from "react";
import ColorCard from "./ColorCard";
import "./ThemeList.css";
import "./Theme.css";

const Theme = ({ theme }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };
//   console.log(isExpanded);




  return (
    <div>
      {/* <h1 className="color-name">{theme.name}</h1> */}
      <button className="theme-toggle" onClick={toggleDetails}>
        {theme.name}
        <span>{isExpanded ? "▲" : "▼"}</span>
      </button>
      
        {!isExpanded && (
        <div className="color-preview-container">    
            {theme.colors.map ((color) =>( 
             <div          
        key={color.value}
        className="color-box"
        style={{backgroundColor: color.value}}
                />
))}          
   </div>
        )}         
    

      {isExpanded && (
        <div>
          {theme.colors.map((color) => (
            <ColorCard key={color.value} hex={color.value} role={color.role} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Theme;
