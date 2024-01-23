import React from "react";
import "./Button.css";

const ConvertButton = ({functionPass}) => {
  return (
    
      <button
        type="button"
        className="btn buton mt-3"
        style={{ width: "100%", color: "white" }}
        onClick={functionPass}
      >
        Generate QR
      </button>
    
  );
};

export default ConvertButton;
