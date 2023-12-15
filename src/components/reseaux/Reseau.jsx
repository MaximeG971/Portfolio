import "./Reseau.css";

function Reseau() {
  return (
    <div className="reseaux">
      <a href="https://linkedin.com/in/maxime-gael">
        <button type="button" className="linkedin">
          <img src="/logo-linkedin.png" width={30} height={30} />
          Linkedin
        </button>
      </a>
      <a href="https://github.com/MaximeG971">
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
  );
}

export default Reseau;
