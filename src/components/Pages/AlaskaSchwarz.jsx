import React from "react";
import Header from "./Header";
import Rabbitimage from "../../Images/Alaska schwarz rabbit.webp";
import "./AllRabbits.css";
const AlaskaRabbit = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="alaskaRabbit">
        <img
          className="rabbitImage"
          src={Rabbitimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ASRs">AlaskaRabbit</h4>
        <h4 className="Lifespans">7-10Yrs span</h4>
      </div>
    </div>
  );
};
export default AlaskaRabbit;
