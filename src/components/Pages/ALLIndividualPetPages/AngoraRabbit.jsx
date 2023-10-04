import React from "react";
import Header from "../Header/Header";
import Rabbitimages from "../../../Images/Angora Rabbit.webp";
import "./AllRabbits.css";
import { Link } from "react-router-dom";
const AngoraRabbit = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="angoraRabbit">
        <img
          className="rabbitImage2"
          src={Rabbitimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ANRs">AngoraRabbit</h4>
        <h4 className="Lifespans">7-12yrs span</h4>
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
export default AngoraRabbit;
