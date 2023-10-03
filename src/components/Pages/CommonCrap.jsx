import React from "react";
import Header from "./Header";
import Fishimage from "../../Images/CommonCrap.jpg";
import "./AllFishes.css";
import { Link } from "react-router-dom";
const CommonCrap = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="commonCrap">
        <img
          className="fishImage"
          src={Fishimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CCs">Common Crap</h4>
        <h4 className="Lifespans">47Yrs Span</h4>
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
export default CommonCrap;
