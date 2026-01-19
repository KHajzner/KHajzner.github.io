import { Link } from "react-router-dom";
import { EnvelopeIcon, LinkedInIcon, GitHubIcon } from "../static/icons";
import "./Skeleton.scss";
const Socials = () => {
  return (
    <div className="socials">
      <EnvelopeIcon />
      <LinkedInIcon />
      <GitHubIcon />
    </div>
  );
};

const Skeleton = ({ children }: { children: any }) => {
  return (
    <div className="frame">
      <div className="sideNav">
        <div className="me">
          <img id="avatar" src={require("../static/avatar.png")} alt="avatar" />
          <h2 className="welcome">Kalina's Corner</h2>
          <Socials />
        </div>
      </div>
      <div className="mainContent">
        <div id="banner" />
        <nav className="navigation">
          <Link to="/">
            <button className="pixel-corners">HOME</button>
          </Link>
          <Link to="/projects">
            <button className="pixel-corners">PROJECTS</button>
          </Link>
          <Link to="/photography">
            <button className="pixel-corners">PHOTOGRAPHY</button>
          </Link>
          <Link to="/library">
            <button className="pixel-corners">LIBRARY</button>
          </Link>
          <Link to="/backlog">
            <button className="pixel-corners">BACKLOG</button>
          </Link>
        </nav>
        {children}
      </div>
    </div>
  );
};

export default Skeleton;
