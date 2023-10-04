import React from "react";
import Header from "../Header/Header";
import Catimaged from "../../../Images/Imaged5.jpeg";
import "./AllCats.css";
import { Link } from "react-router-dom";
const PersianCat = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="PersianCats">
        <img
          className="catimage1"
          src={Catimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="PCS">Persian Cat</h4>
        <h4 className="Moa12">12 Months Old</h4>
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
export default PersianCat;
