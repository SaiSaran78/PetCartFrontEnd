import React from "react";
import Header from "./Header";
import Hamsterimaged from "../../Images/SyrianHamster.avif";
import "./AllHamster.css";
const SyrianHamster = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="syrianHamster">
        <img
          className="hamsterImage3"
          src={Hamsterimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SHs">SyrianHamster</h4>
        <h4 className="Lifespans">2-3yrs span</h4>
      </div>
    </div>
  );
};
export default SyrianHamster;
