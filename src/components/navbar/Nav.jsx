import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#presentation">Présentation</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
