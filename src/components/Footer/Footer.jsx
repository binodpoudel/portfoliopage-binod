import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Footer.css";
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'feather-icons-react';
import { FaXingSquare }  from "react-icons/fa";
import { ThemeContext } from "../../Context";
const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isTablet, setIsTablet] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsTablet(width >= 768 && width <= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`footer ${darkMode ? "dark" : "light"} ${isTablet ? "tablet-view" : ""}`}>
      <div className="footer-blur" style={{
        background: darkMode 
          ? "rgba(253, 187, 45, 0.2)" 
          : "rgba(252, 166, 31, 0.2)",
        width: windowWidth < 768 ? "18rem" : "22rem",
        height: windowWidth < 768 ? "12rem" : "14rem",
        right: windowWidth < 768 ? "5%" : "10%"
      }}></div>
      
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon-wrapper">
                <span className="logo-icon">👨‍💻</span>
              </div>
              <span className="logo-text" style={{ color: darkMode ? "white" : "var(--black)" }}>
                Binod Poudel
                <span className="logo-subtext">Full-Stack Developer</span>
              </span>
            </div>
            <p className="footer-tagline" style={{ color: darkMode ? "#bbb" : "var(--gray)" }}>
              Creating elegant digital experiences with clean code and thoughtful design.
            </p>
            <div className="footer-location" style={{ color: darkMode ? "#bbb" : "var(--gray)" }}>
              <span className="location-icon">📍</span>
              <span>Berlin, Germany</span>
            </div>
          </div>
          <div className="footer-middle-section">
            <div className="footer-links">  
              <div className="link-group">
                <h3 style={{ color: "var(--orange)" }}>Connect</h3>
                <ul>
                  {[
                    { name: 'GitHub', url: 'https://github.com/binodpoudel' },
                    { name: 'LinkedIn', url: 'https://linkedin.com/in/binod-poudel-a547281b2' },
                    { name: 'Xing', url: 'https://www.xing.com/profile/Binod_Poudel2/web_profiles' },
                    { name: 'Contact', to: 'contact' }
                  ].map((item) => (
                    <li key={item.name} onMouseEnter={() => setHoveredLink(item.name)} onMouseLeave={() => setHoveredLink(null)}>
                      {item.to ? (
                        <Link 
                          to={item.to} 
                          smooth={true} 
                          duration={500} 
                          className={`nav-link ${hoveredLink === item.name ? 'hovered' : ''}`}
                          style={{ color: darkMode ? "#ddd" : "var(--gray)" }}
                        >
                          {item.name}
                          <span className="link-underline"></span>
                        </Link>
                      ) : (
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={`nav-link ${hoveredLink === item.name ? 'hovered' : ''}`}
                          style={{ color: darkMode ? "#ddd" : "var(--gray)" }}
                        >
                          {item.name}
                          <span className="link-underline"></span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div> 
            </div>
          </div>

          <div className="footer-contact">
            <div className="contact-item">
              <div className="contact-icon" style={{
                background: darkMode 
                  ? "rgba(255, 255, 255, 0.1)" 
                  : "rgba(0, 0, 0, 0.05)"
              }}>
                <Mail size={18} color={darkMode ? "white" : "var(--black)"}/>
              </div>
              <a 
                href="mailto:footandshadows@gmail.com" 
                className="nav-link contact-link"
                style={{ color: darkMode ? "#ddd" : "var(--gray)" }}
              >
                footandshadows@gmail.com
              </a>
            </div>

            <div className="contact-item">
              <div className="contact-icon" style={{
                background: darkMode 
                  ? "rgba(255, 255, 255, 0.1)" 
                  : "rgba(0, 0, 0, 0.05)"
              }}>
                <Phone size={18} color={darkMode ? "white" : "var(--black)"}/>
              </div>
              <a 
                href="tel:+491796723519" 
                className="nav-link contact-link"
                style={{ color: darkMode ? "#ddd" : "var(--gray)" }}
              >
                +49 (0) 179 6723519
              </a>
            </div>

            <div className="social-links">
              {[
                { icon: <Github size={20}/>, url: 'https://github.com/binodpoudel', label: 'GitHub' },
                { icon: <Linkedin size={20}/>, url: 'https://linkedin.com/in/binod-poudel-a547281b2', label: 'LinkedIn' },
                { icon: <FaXingSquare size={20} />, url:'https://www.xing.com/profile/Binod_Poudel2/cv', label: 'Xing' },
                { icon: <Mail size={20}/>, url: 'mailto:footandshadows@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  className="social-link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  style={{
                    background: darkMode 
                      ? "rgba(255, 255, 255, 0.1)" 
                      : "rgba(0, 0, 0, 0.05)"
                  }}
                >
                  {social.icon}
                  <span className="social-tooltip">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright" style={{ color: darkMode ? "#bbb" : "var(--gray)" }}>
            © {new Date().getFullYear()} Binod Poudel. All rights reserved.
          </div>
          <button 
            className="back-to-top" 
            onClick={scrollToTop}
            style={{
              background: darkMode 
                ? "rgba(255, 255, 255, 0.1)" 
                : "rgba(0, 0, 0, 0.05)",
              color: darkMode ? "white" : "var(--black)"
            }}
          >
            <ArrowUp size={16} className="arrow-icon"/>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;