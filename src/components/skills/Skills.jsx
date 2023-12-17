import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-categories">
        <div className="design">
          <h2>Design</h2>
          <div className="logo-design">
            <img
              src="/logo-figma.png"
              alt="logo figma"
              width={30}
              height={30}
            />
            <p>Figma</p>
          </div>
        </div>
        <div className="frontend">
          <h2>Front-End</h2>
          <div className="logo-frontend">
            <img
              src="/logo-react.png"
              alt="logo react"
              width={30}
              height={30}
            />
            <p>React</p>
          </div>
        </div>
        <div className="backend">
          <h2>Back-End</h2>
          <div className="logo-backend">
            <img
              src="/logo-mysql.png"
              alt="logo mysql"
              width={30}
              height={30}
            />
            <p>MySQL</p>
          </div>
        </div>
        <div className="other">
          <h2>Other</h2>
          <div className="other-github">
            <img
              src="/logo-github.png"
              alt="logo github"
              width={30}
              height={30}
            />
            <p>Git & Github</p>
          </div>
          <div className="other-node">
            <img src="/logo-node.png" alt="logo node" width={30} height={30} />
            <p>node.js</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
