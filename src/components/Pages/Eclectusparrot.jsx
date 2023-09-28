import React from "react";
import Header from "./Header";
import Birdimages from "../../Images/ECLECTUS PARROT.avif";
import "./AllBirds.css";
const ECLECTUSParrot = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="eclectusParrot">
        <img
          className="birdImage2"
          src={Birdimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="EPs">Eclectus Parrot</h4>
        <h4 className="Lifespans">30-40yrs Span</h4>
      </div>
    </div>
  );
};
export default ECLECTUSParrot;
