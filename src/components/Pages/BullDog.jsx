import React from "react";
import Header from "./Header";
import Dogimaged from "../../Images/Bull-dog.webp";
import "./AllDogs.css";
import { Link } from "react-router-dom";
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
        <Link to="/cart">
          <button className="ATC">Add to Cart</button>
        </Link>
        <Link to="/orders">
          <button className="BN">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};
export default BullDog;
