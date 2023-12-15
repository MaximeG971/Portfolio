import "./Projet.css";

function Projets() {
  return (
    <div className="projets">
      <h1>Projets</h1>
      <div className="liste-projets">
        <div className="projet-1">
          <h2>Todo List</h2>
          <p>Description</p>
          <button>Javascript</button>
        </div>
        <div className="projet-2">
          <h2>Capteam America</h2>
          <p>Description</p>
          <button>React</button>
          <button>MySQL</button>
        </div>
      </div>
    </div>
  );
}

export default Projets;
