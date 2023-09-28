import React from "react";
import Header from "./Header";
import Rabbitimaged from "../../Images/Argente rabbit.webp";
import "./AllRabbits.css";
const ArgenteRabbit = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="argenteRabbit">
        <img
          className="rabbitImage3"
          src={Rabbitimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ARRs">ArgenteRabbit</h4>
        <h4 className="Lifespans">7-10yrs span</h4>
      </div>
    </div>
  );
};
export default ArgenteRabbit;
