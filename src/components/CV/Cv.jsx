import "./Cv.css";

function Cv() {
  return (
    <div className="cv">
      <h1>Mon CV</h1>
      <div className="mon-cv">
        <div className="img-cv">
          <img src="/cv.png" alt="aperçu de mon cv" width={300} height={450} />
        </div>
        <a href="/CV-Dev-Alternance.pdf" download>
          <button type="button" className="CV">
            Télécharger le CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default Cv;
