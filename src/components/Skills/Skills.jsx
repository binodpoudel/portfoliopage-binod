import React, { useContext } from "react";
import "./Skills.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { ThemeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from '../../img/Resume.pdf';


const Skills = () => {
  // context
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>🛠️ Developer Stack</span>
        <span></span>
        <span className="about" style={{ color: "#FCA61F" }}>
        </span>
        {/*Resume */}
        <a href={Resume}  download type="application/pdf">
          <button className="button s-button">Resume</button>
        </a>
       {/*<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div> 
      {/* right */}
      <div className="cards" style={{ color: "black" }}>
        {/* first card */}
        <motion.div
          initial={{ left: "-4rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design & Productivity"}
            detail={"Figma, VS Code, debugging tools"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-14rem", top: "12rem" }}
          whileInView={{ left: "-9rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={" Frontend"}
            detail={"HTML5, CSS3, JavaScript (ES6+), TypeScript, React, Next.js, React Router, Redux, Context API, Tailwind CSS, Bootstrap, Material UI"}
          />

        </motion.div>

        {/* 3rd card */}
        <motion.div
          initial={{ left: "11rem", top: "30rem" }}
          whileInView={{ left: "-9rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Backend"}
            detail={" Node.js, Express.js, REST APIs, JWT authentication, PHP, Laravel, Python"}
            color="rgba(252, 166, 31, 0.45)"
          />

        </motion.div>
        {/* 4th */}
        <motion.div
          initial={{ top: "19rem", left: "10rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Databases"}
            detail={
              "  MongoDB, Mongoose, MySQL, SQL"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        {/* 5th card */}
        <motion.div
          initial={{ left: "11rem", top: "30rem" }}
          whileInView={{ left: "-9rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"AI/ML"}
            detail={" Python, Pandas, NumPy, Scikit‑learn, TensorFlow, PyTorch, Streamlit, data visualization libraries (Matplotlib, Seaborn)"}
            color="rgba(252, 166, 31, 0.45)"
          />

        </motion.div>
        {/* 6th card */}
        <motion.div
          initial={{ left: "11rem", top: "30rem" }}
          whileInView={{ left: "-9rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"DevOps & Testing"}
            detail={"  Docker, GitHub, CI/CD pipeline, Jest, PyTest, Postman, AWS basics"}
            color="rgba(252, 166, 31, 0.45)"
          />

        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
