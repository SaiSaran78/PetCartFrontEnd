import React from "react";
import "./orders.css";
import Header from "../Header/Header";
const Orders = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div>
        <p className="Orders">Your Orders</p>
      </div>
    </div>
  );
};
export default Orders;
