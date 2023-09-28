import React from "react";
import Header from "./Header";
import Hamsterimages from "../../Images/robo dwarf.avif";
import "./AllHamster.css";
const RoboDrawf = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="roboDrawf">
        <img
          className="hamsterImage2"
          src={Hamsterimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="RDs">RoboDrawf</h4>
        <h4 className="Lifespans">3yrs span</h4>
      </div>
    </div>
  );
};
export default RoboDrawf;
