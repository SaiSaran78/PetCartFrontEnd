import React from "react";
import Header from "../Header/Header";
import Rabbitimaged from "../../../Images/Argente rabbit.webp";
import "./AllRabbits.css";
import { Link } from "react-router-dom";
const ArgenteRabbit = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="argenteRabbit">
        <img
          className="rabbitImage3"
          src={Rabbitimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ARRs">ArgenteRabbit</h4>
        <h4 className="Lifespans">7-10yrs span</h4>
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
export default ArgenteRabbit;
