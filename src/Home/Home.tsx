import Skeleton from "../Skeleton/Skeleton";
import "./Home.scss";

const Home = () => {
  return (
    <Skeleton>
      <div className="content">
        <div className="aboutme">
          <h2 className="head">
            Hi, I'm Kalina <span className="emoji">ヾ(•̀ ヮ &lt;)و </span></h2>
          <h3 className="body">
            Welcome to my little corner of the internet. Here you can find my
            various projects related to crafts, photography, coding and more.
            <br /><br />You can also have a snoop around my book and gaming libraries!
            <br /><br />Hope you have a pleasant stay!
            <br /><span className="emoji">.₊̣̇.ಇ/ᐠˬ ͜   ˬ ᐟ\∫.₊̣̇.</span>
          </h3>
        </div>
      </div>
    </Skeleton>
  );
};

export default Home;
