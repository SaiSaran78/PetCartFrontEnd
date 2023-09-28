import React from "react";
import Header from "./Header";
import Fishimage from "../../Images/CommonCrap.jpg";
import "./AllFishes.css";
const CommonCrap = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="commonCrap">
        <img
          className="fishImage"
          src={Fishimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CCs">Common Crap</h4>
        <h4 className="Lifespans">47Yrs Span</h4>
      </div>
    </div>
  );
};
export default CommonCrap;
