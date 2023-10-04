import React from "react";
import "./YourAccount.css";
import Header from "../Header/Header";

const YourAccount = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div>
        <p className="YP">Your Profile</p>
      </div>
    </div>
  );
};
export default YourAccount;
