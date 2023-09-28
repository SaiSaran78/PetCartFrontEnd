import React from "react";
import Header from "./Header";
import Rabbitimages from "../../Images/Angora Rabbit.webp";
import "./AllRabbits.css";
const AngoraRabbit = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="angoraRabbit">
        <img
          className="rabbitImage2"
          src={Rabbitimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ANRs">AngoraRabbit</h4>
        <h4 className="Lifespans">7-12yrs span</h4>
      </div>
    </div>
  );
};
export default AngoraRabbit;
