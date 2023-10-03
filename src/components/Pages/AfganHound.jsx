import React from "react";
import Header from "./Header";
import Dogimage from "../../Images/Afghan Hounds Dog.webp";
import "./AllDogs.css";
import { Link } from "react-router-dom";
const AfghanHounds = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="afghanHounds">
        <img
          className="dogImage"
          src={Dogimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="AHs">Afghan Hounds</h4>
        <h4 className="Lifespane">13-14Yrs span</h4>
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
export default AfghanHounds;
