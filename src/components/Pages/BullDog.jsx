import React from "react";
import Header from "./Header";
import Dogimaged from "../../Images/Bull-dog.webp";
import "./AllDogs.css";
const BullDog = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="bullDog">
        <img
          className="dogImage3"
          src={Dogimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="BDs">BullDog</h4>
        <h4 className="Lifespane">7-8yrs span</h4>
      </div>
    </div>
  );
};
export default BullDog;
