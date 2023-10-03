import React from "react";
import Header from "./Header";
import Hamsterimaged from "../../Images/SyrianHamster.avif";
import "./AllHamster.css";
import { Link } from "react-router-dom";
const SyrianHamster = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="syrianHamster">
        <img
          className="hamsterImage3"
          src={Hamsterimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SHs">SyrianHamster</h4>
        <h4 className="Lifespans">2-3yrs span</h4>
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
export default SyrianHamster;
