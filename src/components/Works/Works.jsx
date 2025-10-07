import React, { useContext } from "react";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";
import "./Works.css";
const Works = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const techCategories = [
    {
      title: "🌐 Frontend",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript(ES6+)", "TypeScript", "React", "Next.js", 
              "React Native", "React Router", "Redux", "Context API", "Bootstrap", "Material UI"]
    },
    {
      title: "🖥️ Backend",
      skills: ["Node.js", "Express", "REST APIs", "JWT authentication", "Python", "PHP", "Laravel"]
    },
    {
      title: "🗄️ Database",
      skills: ["MongoDB",  "Mongoose", "MySQL", "SQL"]
    },
    {
      title: "🤖 AI/ML",
      skills: ["Python", "Pandas", "NumPy", "Scikit‑learn", "TensorFlow", "PyTorch", "Streamlit", "data visualization (matplotlib, seaborn)"]
    },
    {
      title: "🧰 DevOps & Testing",
      skills: ["Docker", "GitHub", "CI/CD", "Jest", "PyTest", "Postman", "AWS basics"]
    }
  ];

  return (
    <section className={`works-section ${darkMode ? "dark" : "light"}`} id="works">
      {/*<div className="works-container">*/}
      <div className="works" id="works" style={{ padding: "0 1rem" }}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🧩 Skills & Tech Stack
        </motion.h2>
        
        <div className="skills-grid">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>
                    <span className="skill-bullet">•</span> {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;