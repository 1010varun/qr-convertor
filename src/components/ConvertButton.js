import React from "react";
import "./Button.css";

const ConvertButton = ({functionPass}) => {
  return (
    <div className="">
      <button
        type="button"
        className="btn buton mt-3"
        style={{ width: "50%", color: "white", marginLeft: "25%" }}
        onClick={functionPass}
      >
        Generate QR
      </button>
    </div>
  );
};

export default ConvertButton;
