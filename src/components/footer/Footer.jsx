import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="copyright">© Maxime GAEL</div>
      <div>
        <a
          href="https://linkedin.com/in/maxime-gael"
          rel="noreferrer"
          target="_blank"
        >
          <button type="button" className="contact-linkedin">
            <img src="/logo-linkedin.png" width={30} height={30} />
          </button>
        </a>
        <a
          href="https://github.com/MaximeG971"
          rel="noreferrer"
          target="_blank"
        >
          <button type="button" className="contact-github">
            <img src="/logo-github.png" width={30} height={30} />
          </button>
        </a>
        <a href="mailto:maximejordan.gael@gmail.com">
          <button type="button" className="contact-mail">
            <img src="/logo-mail.png" width={30} height={30} />
          </button>
        </a>
      </div>
    </div>
  );
}

export default Footer;
