import React from "react";
import Header from "./Header";
import FishImage from "../../Images/GoldFish.jpg";
import "./AllFishes.css";
const GoldFish = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="goldFish">
        <img
          className="fishImage3"
          src={FishImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="GFs">Gold Fish</h4>
        <h4 className="Lifespans">30Yrs Span</h4>
      </div>
    </div>
  );
};
export default GoldFish;
