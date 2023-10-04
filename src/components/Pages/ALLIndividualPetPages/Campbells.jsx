import React from "react";
import Header from "../Header/Header";
import Hamsterimage from "../../../Images/Campbells russian dwarf.avif";
import "./AllHamster.css";
import { Link } from "react-router-dom";
const CampbellsRussianHamster = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="campbellsRussianDrawf">
        <img
          className="hamsterImage"
          src={Hamsterimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CRDs">CampbellsRussian</h4>
        <h4 className="Lifespans">2.5-3Yrs span</h4>
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
export default CampbellsRussianHamster;
