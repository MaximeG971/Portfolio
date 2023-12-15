function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div className="contact-mail">
        <h3>Mail</h3>
        <a href="mailto:maximejordan.gael@gmail.com">
          <button type="button" className="mail">
            <img src="/logo-mail.png" width={30} height={30} />
            maximejordan.gael@gmail.com
          </button>
        </a>
      </div>
      <div className="contact-reseau">
        <h3>Réseaux Pro</h3>
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
        <h3>Mon CV</h3>
        <a href="/CV-Dev-Alternance.pdf" download>
          <button type="button" className="CV">
            Télécharger le CV
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
