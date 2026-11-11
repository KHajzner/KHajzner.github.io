import { useState, useEffect } from "react";
import Skeleton from "../Skeleton/Skeleton";
import "./Walk.scss";
import progress from "../static/data/fellowship_progress.json";
import waypoints from "../static/data/waypoints.json";

const Walk = () => {
  const [popUp, setPopup] = useState<any>(null);

  const onClick = (fellowship_member: any) => {
    setPopup(popUp === fellowship_member ? null : fellowship_member);
    console.log(fellowship_member.name);
  };

  return (
    <Skeleton>
      {!!popUp ? (
        <div
          className="progress"
          style={
            {
              "--progress": `${Math.min(Math.max((popUp.progress / 1779) * 100 - 5, 0), 90)}%`,
            } as React.CSSProperties
          }
        >
          <div className="infoBox">
            {popUp?.name} : {popUp.progress} miles
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
      </div>
      <div className="path" />
      <div className="waypoints">
        {waypoints.map((waypoint) => (
          <>
            <p
              className="waypoint"
              style={
                {
                  "--distance": `${(waypoint.mile / 1779) * 100 - 1}%`,
                } as React.CSSProperties
              }
            >
              {waypoint.name}
              {" - "} {waypoint.mile} miles
              <div className="waypointdot" />
            </p>
          </>
        ))}
      </div>
    </Skeleton>
  );
};

export default Walk;
