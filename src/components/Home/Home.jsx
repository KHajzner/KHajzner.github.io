import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div
        className="parallax"
        style={{
          backgroundImage: "url(" + require("./squiggle.png") + ")",
        }}
      ></div>
      <div className="name">
        <h1>Kalina Hajzner</h1>
      </div>
      <p>
        Full-time Software Engineer. <br />
        Newcastle University Graduate.
      </p>
    </div>
  );
};

export default Home;
