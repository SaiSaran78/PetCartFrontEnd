import React from "react";
import Header from "./Header";
import BirdImage from "../../Images/ChatteringLory.avif";
import "./AllBirds.css";
const ChatteringLory = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="chatteringLory">
        <img
          className="birdImage1"
          src={BirdImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CLs">Chattering Lory</h4>
        <h4 className="Lifespans">20 yrs Span</h4>
      </div>
    </div>
  );
};
export default ChatteringLory;
