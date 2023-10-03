import React from "react";
import Header from "./Header";
import BirdImage from "../../Images/ChatteringLory.avif";
import "./AllBirds.css";
import { Link } from "react-router-dom";
const ChatteringLory = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="chatteringLory">
        <img
          className="birdImage1"
          src={BirdImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CLs">Chattering Lory</h4>
        <h4 className="Lifespans">20 yrs Span</h4>
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
export default ChatteringLory;
