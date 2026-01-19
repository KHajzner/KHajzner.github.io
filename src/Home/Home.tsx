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
            <br /> <br />
            I graduated Newcastle University with a 1st in Computer Science!
            <br /> <br />
            I also like: <br />
            ⊹ Photography (Anything that I find interesting)
            <br />
            ⊹ Gaming (Current favourite is Animal Well)
            <br />⊹ Painting (Watercolours and Gouache)
          </h2>
        </div>
      </div>
    </Skeleton>
  );
};

export default Home;
