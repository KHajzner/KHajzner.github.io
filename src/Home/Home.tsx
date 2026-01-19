import Skeleton from "../Skeleton/Skeleton";
import "./Home.scss";

const Home = () => {
  return (
    <Skeleton>
      <div className="content">
        <div className="aboutme">
          <h1>Hi, I'm Kalina!</h1>
          <h2>
            I'm a software engineer, mainly interested in web and game
            development.
          </h2>
          <p></p>
        </div>
      </div>
    </Skeleton>
  );
};

export default Home;
