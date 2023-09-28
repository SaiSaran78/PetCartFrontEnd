import React from "react";
import Header from "./Header";
import Hamsterimage from "../../Images/Campbells russian dwarf.avif";
import "./AllHamster.css";
const CampbellsRussianHamster = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="campbellsRussianDrawf">
        <img
          className="hamsterImage"
          src={Hamsterimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CRDs">CampbellsRussian</h4>
        <h4 className="Lifespans">2.5-3Yrs span</h4>
      </div>
    </div>
  );
};
export default CampbellsRussianHamster;
