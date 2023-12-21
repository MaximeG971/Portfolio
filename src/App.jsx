import "./App.css";
import Nav from "./components/navbar/Nav";
import Skills from "./components/skills/Skills";
import Projets from "./components/projets/Projets";
import Contact from "./components/contact/Contact";
import Cv from "./components/CV/Cv";
import Presentation from "./components/presentation/Presentation";
import Footer from "./components/footer/Footer";
import "../public/photo-portfolio.jpg";

function App() {
  return (
    <div className="div-principale">
      <div>
        <Nav />
      </div>
      <div className="presentation">
        <Presentation />
      </div>
      <div className="skills-container" id="skills">
        <Skills />
      </div>
      <div className="projets-container" id="projets">
        <Projets />
      </div>
      <div className="contact-container" id="contact">
        <Contact />
      </div>
      <div className="cv-container" id="mon-cv">
        <Cv />
      </div>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
