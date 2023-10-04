import React from "react";
import Header from "../Header/Header";
import Catimage from "../../../Images/Imaged1.jpeg";
import "./AllCats.css";
import { Link } from "react-router-dom";
const ScottishFoldCat = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="ScottishFoldCat">
        <img
          className="catimage"
          src={Catimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SFC">Scottish Fold</h4>
        <h4 className="Moa8">8 Months Old</h4>
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
export default ScottishFoldCat;
