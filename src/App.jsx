import "./App.css";
import Nav from "./components/navbar/Nav";
import Reseau from "./components/reseaux/Reseau";
import Skills from "./components/skills/Skills";
import Projets from "./components/projets/Projets";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="div-principale">
      <div className="page-presentation">
        <div className="navbar">
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
        <div className="liens-reseaux">
          <Reseau />
        </div>
      </div>
      <div className="skills-container">
        <Skills />
      </div>
      <div className="projets-container">
        <Projets />
      </div>
      <div className="contact-container">
        <Contact />
      </div>
    </div>
  );
}

export default App;
