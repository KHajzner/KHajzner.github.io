import "./Navigation.scss";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="navigation">
        <div className="navLink">
          <Link to="/">Home</Link>
        </div>
        <div className="navLink">
          <Link to="/about-me">About Me</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
