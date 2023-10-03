import React from "react";
import Header from "./Header";
import DogImage from "../../Images/Akita Dog.webp";
import "./AllDogs.css";
import { Link } from "react-router-dom";
const AkitaDog = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="akitaDog">
        <img
          className="dogImage1"
          src={DogImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ADs">Akita Dog</h4>
        <h4 className="Lifespane">10-12yrs span</h4>
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
export default AkitaDog;
