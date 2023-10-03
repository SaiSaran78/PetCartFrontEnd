import React from "react";
import Header from "./Header";
import Catimages from "../../Images/Imaged4.jpeg";
import "./AllCats.css";
const SnoeShoe = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="snoeshoe">
        <img
          className="catimage2"
          src={Catimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SSA">Snoeshoe</h4>
        <h4 className="Moa6">6 Months Old</h4>
      </div>
    </div>
  );
};
export default SnoeShoe;
