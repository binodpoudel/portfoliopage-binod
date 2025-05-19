//  App.js
import { useContext } from "react";
import { ThemeContext } from "./Context";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#f5f5f5" : "#242D49",
        minHeight: "100vh",
        transition: "all 0.3s ease",
        maxWidth: '100vw',
        overflowX: 'hidden'
      }}
    >
      <Navbar />
      <main>
        <Intro />
        <Skills />
        <Experience />
        <Works />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;