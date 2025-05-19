import React, { useContext } from "react";
import "./Card.css";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";

const Card = ({ emoji, heading, detail, color }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Parse the detail prop into an array of skills if it contains commas
  const skills = typeof detail === 'string' ? 
    detail.split(',').map(skill => skill.trim()) : 
    Array.isArray(detail) ? detail : [];

  return (
    <motion.div 
      className="card"
      style={{ 
        borderColor: color,
        background: darkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.26)"
      }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <img src={emoji} alt={heading} />
      <h3 className="card-header" style={{ color: darkMode ? "white" : "" }}>
        {heading}
      </h3>
      <div className="card-content">
        {skills.length > 0 ? (
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        ) : (
          <span style={{ color: darkMode ? "#ccc" : "var(--gray)" }}>{detail}</span>
        )}
      </div>
      <button className="c-button">LEARN MORE</button>
    </motion.div>
  );
};

export default Card;