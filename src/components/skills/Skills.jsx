import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="skills-categories">
        <div className="design">
          <h2>Design</h2>
          <p>Figma</p>
        </div>
        <div className="frontend">
          <h2>Front-End</h2>
          <p>React</p>
        </div>
        <div className="backend">
          <h2>Back-End</h2>
          <p>MySQL</p>
        </div>
        <div className="other">
          <h2>Other</h2>
          <p>Git & Github</p>
          <p>node.js</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
