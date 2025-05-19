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
      skills: ["HTML5", "CSS3", "JavaScript(ES6+)", "React", 
              "React Native", "Redux", "Context API", "Bootstrap", "Tailwind CSS", "Material UI"]
    },
    {
      title: "🖥️ Backend",
      skills: ["Node.js", "Express", "Python", "PHP", "Laravel", "REST APIs"]
    },
    {
      title: "🗄️ Database",
      skills: ["MongoDB",  "Mongoose", "MySQL", "SQL"]
    },
    {
      title: "🧰 Tools",
      skills: ["Git, GitHub, Webpack, GitHub Actions, CI/CD pipeline", "Agile, Scrum", "Figma, Responsive Design", "VSCode, Postman, Jest Testing, Debugging", "RESTful APIs, Docker", "TypeScript", "Pandas, NumPy, Streamlit, Machine Learning (ML)", "Artificial Intelligence (AI), Tableau",  "Linux"]
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