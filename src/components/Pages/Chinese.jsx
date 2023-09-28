import React from "react";
import Header from "./Header";
import HamsterImage from "../../Images/Chinese hamster.webp";
import "./AllHamster.css";
const ChineseHamster = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="chineseHamster">
        <img
          className="hamsterImage1"
          src={HamsterImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CHs">ChineseHamster</h4>
        <h4 className="Lifespans">2.5-3yrs span</h4>
      </div>
    </div>
  );
};
export default ChineseHamster;
