import { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";
import "./Walk.scss";
import progress from "../static/data/fellowship_progress.json";

const Walk = () => {
  const [popUp, setPopup] = useState<any>(null);

  const onClick = (fellowship_member: any) => {
    setPopup(popUp === fellowship_member ? null : fellowship_member);
    console.log(fellowship_member.name);
  };

  return (
    <Skeleton>
      {!!popUp ? (
        <div className="progress"             style={
              {
                "--progress":  `${(popUp.progress / 1779) * 100}%`,
              } as React.CSSProperties
            }>
          <div
            className="infoBox"
          >
            <h3>Information Box</h3>
            Name: {popUp?.name} <br />
            Walked: {popUp.progress} miles
          </div>
        </div>
      ) : (
        <div className="empty" />
      )}
      <div className="slidecontainer">
        {progress.map((fellowship_member) => (
          <input
            type="range"
            min="0"
            max="1779"
            value={fellowship_member.progress}
            className="walk"
            style={
              {
                "--icon-img": `url(${fellowship_member.icon})`,
              } as React.CSSProperties
            }
            readOnly
            onClick={() => onClick(fellowship_member)}
          />
        ))}
        <div className="path"></div>
      </div>
    </Skeleton>
  );
};

export default Walk;
