import React from "react";
import Header from "./Header";
import Birdimaged from "../../Images/GreyCocktiel.avif";
import "./AllBirds.css";
const GreyCocktiel = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="greyCocktiel">
        <img
          className="BirdImage3"
          src={Birdimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="GC">Grey Cocktiel</h4>
        <h4 className="Lifespan">16-25Yrs Span</h4>
      </div>
    </div>
  );
};
export default GreyCocktiel;
