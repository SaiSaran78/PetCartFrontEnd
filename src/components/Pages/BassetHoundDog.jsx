import React from "react";
import Header from "./Header";
import Dogimages from "../../Images/Basset Hound Dog .webp";
import "./AllDogs.css";
const BassetHound = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="bassetHound">
        <img
          className="dogImage2"
          src={Dogimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="BHDs">BassetHound</h4>
        <h4 className="Lifespane">9-10yrs span</h4>
      </div>
    </div>
  );
};
export default BassetHound;
