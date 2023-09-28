import React from "react";
import Header from "./Header";
import Fishimaged from "../../Images/SwordFish.jpg";
import "./AllFishes.css";
const SwordFish = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="swordFish">
        <img
          className="fishImage1"
          src={Fishimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SFs">Sword Fish</h4>
        <h4 className="Lifespans">9yrs Span</h4>
      </div>
    </div>
  );
};
export default SwordFish;
