import React from "react";
import Header from "../Header/Header";
import Fishimaged from "../../../Images/SwordFish.jpg";
import "./AllFishes.css";
import { Link } from "react-router-dom";
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
export default SwordFish;
