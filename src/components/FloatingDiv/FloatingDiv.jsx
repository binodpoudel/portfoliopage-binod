// FloatingDiv.jsx
import React, { useContext } from "react";
import { ThemeContext } from "../../Context";
import './FloatingDiv.css';

const FloatinDiv = ({ img, text1, text2 }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="floatingDiv" style={{ background: darkMode ? "rgba(0, 0, 0, 0.5)" : "" }}>
      <img src={img} alt="" />
      {/*
      <span style={{ color: darkMode ? "white" : "" }}> */}
      <span> 
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;