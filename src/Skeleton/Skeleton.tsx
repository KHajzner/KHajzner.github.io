import { Link } from "react-router-dom";
import {
  EnvelopeIcon,
  LinkedInIcon,
  GitHubIcon,
  BookIcon,
  MusicIcon,
} from "../static/icons";
import "./Skeleton.scss";

const Socials = () => {
  return (
    <div className="socials">
      <EnvelopeIcon />
      <LinkedInIcon />
      <GitHubIcon />
      <MusicIcon />
    </div>
  );
};

const ReadingChallange = () => {
  return (
    <div id="gr_challenge_11680">
      <div id="gr_challenge_progress_body_11680">
        <h3 id="challange_heading">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.goodreads.com/challenges/11680-2026-reading-challenge"
            id="heading_link"
          >
            2026 Reading Challenge
          </a>
        </h3>
        <div className="challengePic">
          <BookIcon />
        </div>
        <div id="challange_body">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.goodreads.com/user/show/161710093-kalina"
          >
            Kalina
          </a>{" "}
          has read 1 book toward their goal of 12 books.
          <div id="div_1">
            <div id="div_2">
              <span id="div_3">hide</span>
            </div>
          </div>
          <div id="progress">1 of 12 (8%)</div>
        </div>
      </div>
      <script src="https://www.goodreads.com/user_challenges/widget/161710093-kalina?challenge_id=11680&v=2"></script>
    </div>
  );
};

const Skeleton = ({ children }: { children: any }) => {
  return (
    <div className="frame">
      <div className="sideNav">
        <div className="me">
          <img
            id="avatar"
            src={require("../static/images/avatar.png")}
            alt="avatar"
          />
          <h2 className="welcome">Kalina's Corner</h2>
          <Socials />
          <ReadingChallange />
        </div>
      </div>
      <div className="mainContent">
        <div id="flex1">
          <img src={require("../static/images/banner.gif")} id="banner" />
        </div>
        <nav id="flex2" className="navigation">
          <Link to="/">
            <button className="pixel-corners">HOME</button>
          </Link>
          <Link to="/projects">
            <button className="pixel-corners">BLOG</button>
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
          <Link to="/about-me">
            <button className="pixel-corners">ABOUT ME</button>
          </Link>
        </nav>
        <div id="flex3">{children}</div>
      </div>
    </div>
  );
};

export default Skeleton;
