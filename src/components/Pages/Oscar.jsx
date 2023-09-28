import React from "react";
import Header from "./Header";
import Fishimages from "../../Images/Oscar.jpg";
import "./AllFishes.css";
const Oscar = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="oscar">
        <img
          className="fishImage2"
          src={Fishimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="Os">Oscar</h4>
        <h4 className="Lifespans">10-20yrs Span</h4>
      </div>
    </div>
  );
};
export default Oscar;
