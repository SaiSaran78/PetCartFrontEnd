import React from "react";
import Header from "./Header";
import Hamsterimages from "../../Images/robo dwarf.avif";
import "./AllHamster.css";
import { Link } from "react-router-dom";
const RoboDrawf = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="roboDrawf">
        <img
          className="hamsterImage2"
          src={Hamsterimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="RDs">RoboDrawf</h4>
        <h4 className="Lifespans">3yrs span</h4>
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
export default RoboDrawf;
