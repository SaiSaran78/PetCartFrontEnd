import React from "react";
import "./Cart.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
const Cart = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="cart_container">
        <h3 className="cart">Your cart is empty</h3>
        <p className="Additems">Add items to it now</p>
        <Link to="/LandingPath">
          <button className="cart_btn">Shop now</button>
        </Link>
      </div>
    </div>
  );
};
export default Cart;
