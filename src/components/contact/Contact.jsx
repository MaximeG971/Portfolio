import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <div className="liens-contact">
        <a href="https://linkedin.com/in/maxime-gael">
          <button type="button" className="contact-linkedin">
            <img src="/logo-linkedin.png" width={30} height={30} />
            Linkedin
          </button>
        </a>
        <a href="https://github.com/MaximeG971">
          <button type="button" className="contact-github">
            <img src="/logo-github.png" width={30} height={30} />
            Github
          </button>
        </a>
        <a href="mailto:maximejordan.gael@gmail.com">
          <button type="button" className="contact-mail">
            <img src="/logo-mail.png" width={30} height={30} />
            maximejordan.gael@gmail.com
          </button>
        </a>
      </div>
    </div>
  );
}

export default Contact;
