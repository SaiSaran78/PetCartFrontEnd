import React, { useState } from "react";
import "./LoginDropDown.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const LoginDropDown = ({update}) => {
  const [open, setOpen] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Logout");
  const [timeoutId, setTimeoutId] = useState(null);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleItemClick = (item) => {
    update("Logout");
    if (item === "Your Account") {
      setButtonLabel("Your Account");
      clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => {
        setButtonLabel("Logout");
      }, 100000);
      setTimeoutId(newTimeoutId);
    }
  };
  return (
    <div
      className={`login-dropdown ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button onClick={toggleDropdown} className="btn btn-success">
        <span
          className={`btn-label ${
            buttonLabel === "Your Account" ? "active" : ""
          }`}
        >
          {buttonLabel}
        </span>{" "}
        <BsFillCaretDownFill size="0.8rem" color="white" className="caret" />
      </button>
      {open && (
        <div className="dropdown-content">
          <ul className="list-group">
            <li className="list-group-item">
              <Link
                to="/your-account"
                onClick={() => handleItemClick("Your Account")}
              >
                Your Account
              </Link>
            </li>
            <li className="list-group-item">
              <Link
                to="/YourOrder"
                onClick={() => handleItemClick("Your Order")}
              >
                Your Order
              </Link>
            </li>
            <li className="list-group-item" >
              <Link to="/home" onClick={() => handleItemClick("Logout")}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LoginDropDown;
