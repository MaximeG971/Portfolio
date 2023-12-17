import "./App.css";
import Nav from "./components/navbar/Nav";
import Reseau from "./components/reseaux/Reseau";
import Skills from "./components/skills/Skills";
import Projets from "./components/projets/Projets";
import Contact from "./components/contact/Contact";
import Cv from "./components/CV/Cv";
import "../public/photo-portfolio.jpg";

function App() {
  return (
    <div className="div-principale">
      <div className="page-presentation" id="presentation">
        <div className="navbar-container">
          <Nav />
        </div>
        <h1>Maxime GAEL</h1>
        <h2>Développeur Web</h2>
        <p>
          Bienvenue sur mon portfolio, vous pourrez y retrouver mes différents
          projets, <br />
          les skills utilisés ainsi que les différentes manières de me
          contacter.
        </p>
        <img
          src="../public/photo-portfolio.jpg"
          alt="photo Maxime"
          className="photo-portfolio"
        />
        <div className="liens-reseaux">
          <Reseau />
        </div>
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
    </div>
  );
}

export default App;
