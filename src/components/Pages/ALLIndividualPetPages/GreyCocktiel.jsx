import React from "react";
import Header from "../Header/Header";
import Birdimaged from "../../../Images/GreyCocktiel.avif";
import "./AllBirds.css";
import { Link } from "react-router-dom";
const GreyCocktiel = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="greyCocktiel">
        <img
          className="BirdImage3"
          src={Birdimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="GCs">Grey Cocktiel</h4>
        <h4 className="Lifespans">16-25Yrs Span</h4>
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
export default GreyCocktiel;
