import React from "react";
import Header from "./Header";
import Dogimage from "../../Images/Afghan Hounds Dog.webp";
import "./AllDogs.css";
const AfghanHounds = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="afghanHounds">
        <img
          className="dogImage"
          src={Dogimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="AHs">Afghan Hounds</h4>
        <h4 className="Lifespane">13-14Yrs span</h4>
      </div>
    </div>
  );
};
export default AfghanHounds;
