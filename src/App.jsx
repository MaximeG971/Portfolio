import "./App.css";
import Nav from "./components/navbar/Nav";
import Reseau from "./components/reseaux/Reseau";
import Skills from "./components/skills/Skills";
import Projets from "./components/projets/Projets";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="div-principale">
      <div className="navbar">
        <Nav />
      </div>
      <h1>Maxime GAEL</h1>
      <h2>Développeur Web</h2>
      <div className="liens-reseaux">
        <Reseau />
      </div>
      <div className="skills-container">
        <Skills />
      </div>
      <div className="projets">
        <Projets />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
