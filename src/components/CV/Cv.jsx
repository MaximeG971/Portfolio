import React from "react";

function Cv() {
  return (
    <div>
      <h3>Mon CV</h3>
      <a href="/CV-Dev-Alternance.pdf" download>
        <button type="button" className="CV">
          Télécharger le CV
        </button>
      </a>
    </div>
  );
}

export default Cv;
