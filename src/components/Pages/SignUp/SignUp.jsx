import React, { useState } from "react";
import "./Signup.css";
import Petimage from "../../../Images/Image2.png";
import Button from "../../Assets/components";
import { Link } from "react-router-dom";
const SignUP = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    emailAddress: "",
  });

  const [errors, setErrors] = useState({
    mobileNumber: "",
    emailAddress: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateMobileNumber = () => {
    const mobileRegex = /^[0-9]{1,10}$/;
    if (!mobileRegex.test(formData.mobileNumber)) {
      setErrors({ ...errors, mobileNumber: "Invalid mobile number" });
    } else {
      setErrors({ ...errors, mobileNumber: "" });
    }
  };

  const validateEmailAddress = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      setErrors({ ...errors, emailAddress: "Invalid email address" });
    } else {
      setErrors({ ...errors, emailAddress: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate mobile number and email address
    validateMobileNumber();
    validateEmailAddress();

    // If there are validation errors, do not submit the form
    if (errors.mobileNumber || errors.emailAddress) {
      return;
    }
  };
  return (
    <div>
      <div className="NewAccount">
        <h1 className="Newaccount">Create a new Account</h1>
        <form onClick={handleSubmit}>
          <div>
            <label class="Yourname">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="First and Last Name"
              class="FirstandLastName"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label class="MobileNumber">Mobile Number</label>
            <input
              type="Number"
              name="mobileNumber"
              placeholder="Mobile Number"
              class="MN"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              onBlur={validateMobileNumber}
              required
            />
            {errors.mobileNumber && (
              <span className="error">{errors.mobileNumber}</span>
            )}
          </div>
          <div>
            <label class="Emailaddress">Email Address</label>
            <input
              type="text"
              name="emailAddress"
              placeholder="Email Address"
              class="EmailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              onBlur={validateEmailAddress}
              required
            />
            {errors.emailAddress && (
              <span className="error">{errors.emailAddress}</span>
            )}
          </div>
          <div>
            <Link to="/signupotp">
              <Button
                type="submit"
                value="Send OTP"
                colors="btndarkslategray pad_squared"
              ></Button>
            </Link>
          </div>
        </form>
        <div className="AHAccount">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="ANA">Already Have a Account ?</p>
          </Link>
        </div>
      </div>

      <div className="Side">
        <span className="Circle"></span>
        <img
          className="Pet"
          src={Petimage}
          alt="Pet"
          width="25px"
          height="20px"
        />
        <span className="Circle1"></span>
      </div>
    </div>
  );
};
export default SignUP;
