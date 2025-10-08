//Intro.jsx
import React, { useContext } from "react";
import "./Intro.css";
import me from "../../img/5.jpg";
import { ThemeContext } from "../../Context";
import { Link } from "react-scroll";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Google from '@iconscout/react-unicons/icons/uil-at';
import { FaXingSquare }  from "react-icons/fa";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>👋Hi, </span>
          <span>I'm Binod Poudel</span>
          <span className="about">
                I’m a Full-Stack Software Developer with a strong focus on Frontend Development, currently based in Berlin, Germany. I specialize in building clean, responsive, and high-performance web applications that deliver exceptional user experiences. <br/> With a solid foundation in full-stack development, I’ve been working since 2020 with technologies like React.js, Next.js, and Tailwind CSS on the frontend — my primary area of expertise — while also building and integrating backend services using Node.js, Express.js, PHP, and Laravel. <br/> I'm passionate about UI/UX design, performance optimization, and clean, maintainable code. I'm also exploring Python and AI/ML to bring intelligent, data-driven features to the frontend. <br/> 🚀 I’m currently seeking a <span className="text-blue-600"></span> Frontend Developer role — remote, hybrid, or on-site — across Europe and globally, where I can apply my frontend strengths while bringing full-stack insight to the team when needed.
          </span>
          <span className="hire">
            <span>💬 Got a project in mind?</span> <br />  
            Let's build something amazing together —     
            I'd love to bring your ideas to life.
            </span> 
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me ⬇️</button>
        </Link>
        
        <div className="intro-icons">
          <a href='https://github.com/binodpoudel' target='_blank' rel='noreferrer'>
            <Github color={darkMode ? "white" : "var(--orange)"} size={"100%"} />
          </a>
          <a href='https://www.linkedin.com/in/binod-poudel-a547281b2/' target='_blank' rel='noreferrer'>
            <LinkedIn color={darkMode ? "white" : "var(--orange)"} size={"100%"} />
          </a>
          <a href='https://www.xing.com/profile/Binod_Poudel2/cv' target='_blank' rel='noreferrer'>
            <FaXingSquare color={darkMode ? "white" : "var(--orange)"} size={"100%"} />
          </a> 
          <a href='https://gmail.com/' target='_blank' rel='noreferrer'>
            <Google color={darkMode ? "white" : "var(--orange)"} size={"100%"} />
          </a>
        </div>
      </div>
        {/* Right side with floating elements */}
<div className="i-right">
  <img src={me} alt="Profile" className="main-image" />

  {/* Blur effects */}
   <div className="blur" style={{ background: "rgb(238 210 255)", top: "-18%", left: "56%" }}></div>
   <div className="blur" style={{ background: "#C1F5FF", top: "17rem", left: "-9rem" }}></div>
   </div>
    </div>
  );
};

export default Intro;