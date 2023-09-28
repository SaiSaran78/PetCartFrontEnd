import React from "react";
import Header from "./Header";
import DogImage from "../../Images/Akita Dog.webp";
import "./AllDogs.css";
const AkitaDog = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="akitaDog">
        <img
          className="dogImage1"
          src={DogImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ADs">Akita Dog</h4>
        <h4 className="Lifespane">10-12yrs span</h4>
      </div>
    </div>
  );
};
export default AkitaDog;
