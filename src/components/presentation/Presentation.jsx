import "./Presentation.css";

function Presentation() {
  return (
    <div className="page-presentation" id="presentation">
      <div className="container-elements">
        <div className="presentation-maxime">
          <h1>Maxime GAEL</h1>
          <p>Développeur Web</p>
          <p>
            Bienvenue sur mon portfolio, vous pourrez y retrouver mes différents
            projets, <br />
            les skills utilisés ainsi que les différentes manières de me
            contacter.
          </p>
          <div className="reseaux">
            <a
              href="https://linkedin.com/in/maxime-gael"
              rel="noreferrer"
              target="_blank"
            >
              <button type="button" className="linkedin">
                <img src="/logo-linkedin.png" width={30} height={30} />
                Linkedin
              </button>
            </a>
            <a
              href="https://github.com/MaximeG971"
              rel="noreferrer"
              target="_blank"
            >
              <button type="button" className="github">
                <img src="/logo-github.png" width={30} height={30} />
                Github
              </button>
            </a>
            <a href="mailto:maximejordan.gael@gmail.com">
              <button type="button" className="mail">
                <img src="/logo-mail.png" width={30} height={30} />
                maximejordan.gael@gmail.com
              </button>
            </a>
          </div>
          <div className="container-photo">
            <img
              src="../public/photo-portfolio.jpg"
              alt="photo Maxime"
              className="photo-portfolio"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
