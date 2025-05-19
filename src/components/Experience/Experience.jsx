//Experience.jsx 
import React, { useContext } from "react";
import { ThemeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="experience" id='experience'>
      <div className="experience-header">
        <h2>Professional Experience</h2>
        <p>Combining technical expertise with a commitment to continuous learning.</p>
      </div>

      <div className="achievements-container">
        <div className="achievement" style={{ background: darkMode ? 'rgba(0, 0, 0, 0.2)' : 'white' }}>
          <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>4+</div>
          <div className="achievement-content">
            <h3 className="achievement-title">Years Experience</h3>
            <p className="achievement-desc">
              Working with modern web technologies and frameworks
            </p>
          </div>
        </div>
        <div className="achievement" style={{ background: darkMode ? 'rgba(0, 0, 0, 0.2)' : 'white' }}>
          <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>🛠️</div>
          <div className="achievement-content">
            <h3 className="achievement-title">Backend Developer</h3>
            <p className="achievement-desc">
              Specialized in building robust server-side applications
            </p>
          
          </div>
        </div>

        <div className="achievement" style={{ background: darkMode ? 'rgba(0, 0, 0, 0.2)' : 'white' }}>
          <div className="circle" style={{ color: darkMode ? 'var(--orange)' : '' }}>🚀</div>
          <div className="achievement-content">
            <h3 className="achievement-title">Working on exciting projects</h3>
            <p className="achievement-desc">
            While exploring new challenges and technologies.  
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;