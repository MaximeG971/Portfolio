import "./Projet.css";

function Projets() {
  return (
    <div className="projets">
      <h1>Projets</h1>
      <div className="liste-projets">
        <div className="projet-1">
          <h2>Todo List</h2>
          <div className="todoList">
            <img
              src="/todolist.png"
              alt="projet todolist"
              width={300}
              height={200}
            />
          </div>
          <h3>Description</h3>
          <button>Javascript</button>
          <div className="lien-projet">
            <a
              href="https://maximeg971.github.io/Todo_List_projet1/"
              rel="noreferrer"
              target="_blank"
            >
              <button type="button" className="todo-lien">
                Voir le projet
              </button>
            </a>
          </div>
        </div>
        <div className="projet-2">
          <div className="capteam">
            <h2>Capteam America</h2>
            <img
              src="/capteam.png"
              alt="projet capteam"
              width={300}
              height={200}
            />
          </div>
          <h3>Description</h3>
          <button>React</button>
          <button>MySQL</button>
          <div className="lien-projet">
            <a
              href="https://capteam-america.remote-fr-3.wilders.dev/"
              rel="noreferrer"
              target="_blank"
            >
              <button type="button" className="capteam-lien">
                Voir le projet
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projets;
