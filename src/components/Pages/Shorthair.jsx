import React from "react";
import Header from "./Header";
import CatImage from "../../Images/Imaged3.jpeg";
import "./Shorthair.css";
const Shorthair = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="shorthair">
        <img
          className="catimage3"
          src={CatImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SHC">Shorthair</h4>
        <h4 className="Moa6">6 Months Old</h4>
      </div>
    </div>
  );
};
export default Shorthair;
