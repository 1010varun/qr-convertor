import React, { useEffect } from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = (props) => {
  // Load the initial mode from localStorage or default to light mode
  const initialMode = localStorage.getItem("darkMode") === "true";
  const [isDarkMode, setDarkMode] = React.useState(initialMode);

  // Update the mode in localStorage when it changes
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    props.toggleMode(); // Call your custom toggle function here
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`} style={{ backgroundColor: "#712cf9" }}>
      <div className="container navbar-container align-items-center justify-content-between">
        <span
          className=" ms-5 mb-0 h3 text-center"
          style={{ color: "white", fontFamily: "Dancing Script, cursive" }}
        >
          QR Code Generator
        </span>
        <div style={{ transform: "translateY(25%)" }}>
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={30}
          />
        </div>
      </div>

    </nav>
  );
};

export default Navbar;