import React from "react";
import Header from "../Header/Header";
import RabbitImage from "../../../Images/American Rabbit.webp";
import { Link } from "react-router-dom";
import "./AllRabbits.css";

const AmericanRabbit = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="americanRabbit">
        <img
          className="rabbitImage1"
          src={RabbitImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ARs">AmericanRabbit</h4>
        <h4 className="Lifespans">8-10yrs span</h4>
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
export default AmericanRabbit;
