import React from "react";
import "./style.css";



 // Left column of business card
  export function LeftColumn(props) {
    return (
      <div className="col left" {...props}>
        
      </div>
    );
  }

  // Right column of business card
  export function RightColumn(props) {
    return (
      <div className="col right flex flex-column" {...props}>
      </div>
    );
  }