import Skeleton from "../Skeleton/Skeleton";
import gameRec from "../static/data/game_rec.json";
import "./Backlog.scss";

const Backlog = () => {
  return (
    <Skeleton>
      <div className="content">
        <div className="block">
          <h1 className="header">Recently Played</h1>
          {gameRec.map((game) => (
            <div className="book">
              <img className="cover" height="250px" src={game.cover} />
              <p className="title">{game.title}</p>
            </div>
          ))}
        </div>
        <div className="block">
          <h1 className="header">Games I Adore</h1>
          {gameRec.map((game) => (
            <div className="book">
              <img className="cover" height="250px" src={game.cover} />
              <p className="title">{game.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Skeleton>
  );
};

export default Backlog;
