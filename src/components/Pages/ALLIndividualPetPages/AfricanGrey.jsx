import React from "react";
import Header from "../Header/Header";
import Birdimage from "../../../Images/AfricanGrey.avif";
import "./AllBirds.css";
import { Link } from "react-router-dom";
const AfricanGrey = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="africanGrey">
        <img
          className="birdImage"
          src={Birdimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="AGs">African Grey</h4>
        <h4 className="Lifespans">40-50Yrs Span</h4>
        <Link to="/cart">
          <button className="ATCs">Add to Cart</button>
        </Link>
        <Link to="/orders">
          <button className="BNs">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};
export default AfricanGrey;
