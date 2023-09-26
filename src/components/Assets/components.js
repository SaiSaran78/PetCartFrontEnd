import React, { useState, useEffect } from "react";
import "./components.css";

function Button(props) {
  const { value, colors, click } = props;
  return (
    <div>
      <button className={colors} onClick={click}>
        {value}
      </button>
    </div>
  );
}
export function Input(props) {
  const { type, placeholder, clsname } = props;
  return (
    <div>
      <input type={type} placeholder={placeholder} className={clsname}></input>
    </div>
  );
}
export function Loader(props) {
  const { display, page } = props;
  let top;
  let left;
  if (page === "Login") {
    top = -35 + "px";
    left = 450 + "px";
  } else if (page === "OTP") {
    top = -55 + "px";
    left = 300 + "px";
  }
  const style = { display: display, top: top, left: left };
  return <div className="loader" style={style}></div>;
}

export function Popup(props) {
  const { display, errorType, pages, message } = props;
  let top;
  let left;
  if (pages === "Login") {
    top = -310 + "px";
    left = 130 + "px";
  } else if (pages === "OTP") {
    top = -320 + "px";
    left = 40 + "px";
  }
  const style = { display: display, top: top, left: left };
  return (
    <div id="popup" className={errorType} style={style}>
      <p className="popupmsgs">{message}</p>
    </div>
  );
}
export default Button;
