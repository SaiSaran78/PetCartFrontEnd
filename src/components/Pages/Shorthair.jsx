import React from "react";
import Header from "./Header";
import CatImage from "../../Images/Imaged3.jpeg";
import "./AllCats.css";
import { Link } from "react-router-dom";
const Shorthair = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="shorthair">
        <img
          className="catimage3"
          src={CatImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SHC">Shorthair</h4>
        <h4 className="Moa6">6 Months Old</h4>
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
export default Shorthair;
