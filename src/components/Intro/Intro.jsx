//Intro.jsx
import React, { useContext } from "react";
import "./Intro.css";
import me from "../../img/5.jpg";
import { ThemeContext } from "../../Context";
import { Link } from "react-scroll";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Slack from '@iconscout/react-unicons/icons/uil-slack';
import Google from '@iconscout/react-unicons/icons/uil-at';
import { FaXingSquare }  from "react-icons/fa";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi, </span>
          <span>I'm Binod Poudel</span>
          <span className="about">
            Originally from the beautiful Himalayan country of Nepal, 
            I'm a Full-Stack Software Developer currently based in Berlin, Germany.
            I'm passionate about turning ideas into clean, interactive, and responsive web applications.
            Whether working on frontend interfaces or backend logic,
            I love solving problems and having fun while doing it.
            Right now, I'm actively seeking a <b style={{fontWeight: "bold", color: "var(--orange)"}}>Front-End Developer </b> role in Germany.
          </span>
          <span className="hire">
            <span>Got a project in mind?</span> <br />  
            Let's build something amazing together!    
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
          <a href='https://slack.com' target='_blank' rel='noreferrer'>
            <Slack color={darkMode ? "white" : "var(--orange)"} size={"100%"} />
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