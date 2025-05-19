import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { ThemeContext } from "../../Context";

const Toggle = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const handleClick = () => {
    dispatch({ type: "toggle" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className="toggle"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={darkMode}
      tabIndex={0}
      aria-label={`Toggle ${darkMode ? "light" : "dark"} mode`}
    >
      <Moon aria-hidden="true" />
      <Sun aria-hidden="true" />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
        aria-hidden="true"
      />
    </div>
  );
};

export default Toggle;