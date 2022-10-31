import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#712cf9" }}>
      <div className="container-fluid">
        <span
          className=" ms-5 mb-0 h3 text-center"
          style={{ color: "white", fontFamily: "Dancing Script, cursive" }}
        >
          QR Code Generator
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
