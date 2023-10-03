import React from "react";
import Header from "./Header";
import Catimages from "../../Images/Imaged4.jpeg";
import "./AllCats.css";
import { Link } from "react-router-dom";
const SnoeShoe = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="snoeshoe">
        <img
          className="catimage2"
          src={Catimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SSA">Snoeshoe</h4>
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
export default SnoeShoe;
