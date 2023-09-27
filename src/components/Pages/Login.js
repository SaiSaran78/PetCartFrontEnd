import React, { useState,useRef,useEffect } from "react";
import "./Login.css";
import Googleimage from "../../Images/Image.png";
import Petimage from "../../Images/Image2.png";
import Button, { Loader, Popup } from "../Assets/components";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();

  const [error, setError] = useState({
    email: { required: false, invalid: false },
  });

  const [loader, setLoader] = useState("none");
  const [popup, setPopup] = useState({
    popup_status: "none",
    popup_error: "popup_error",
    message: "Invalid Credentials",
  });
  const [value, setValue] = useState({
    email: "",
  });
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);
  const handleInput = (e) => {
    setValue({
      email: e.target.value,
    });
  };

  const validEmails = [
    "mail1a@mail.com",
    "mail1b@mail.com",
    "mail2a@mail.com",
    "mail2b@mail.com",
    "mail3a@mail.com",
    "mail3b@mail.com",
    "mail4a@mail.com",
    "mail4b@mail.com",
  ];
  const emailvalidation = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail =
      emailPattern.test(value.email) || validEmails[value.email];
    setError({
      ...error,
      email: {
        required: value.email === "",
        invalid: value.email !== "" && !isValidEmail,
      },
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    emailvalidation();
    const previousErrors = { ...error };
    let flag = false;

    if (value.email === "") {
      // previousErrors.email = { required: true, userNotFound: false };
      setLoader("block");
      setTimeout(() => {
        setPopup({
          popup_status: "block",
          popup_error: "popup_error",
          message: "Enter an Email address",
        });
        setLoader("none");
        setTimeout(() => {
          setPopup({
            popup_status: "none",
            popup_error: "popup_error",
            message: "",
          });
        }, 1000);
      }, 2000);
    } else if (!validEmails.includes(value.email)) {

      setLoader("block");
      setTimeout(() => {
        setPopup({
          popup_status: "block",
          popup_error: "popup_error",
          message: "Invalid Credentials",
        });
        setLoader("none");
        setTimeout(() => {
          setPopup({
            popup_status: "none",
            popup_error: "popup_error",
            message: "",
          });
        }, 1000);
      }, 2000);
    } else {
      setLoader("block");
      setTimeout(() => {
        setLoader("none");
        setPopup({
          popup_status: "block",
          popup_error: "popup_success",
          message: "Send OTP Successful",
        });
        setTimeout(() => {
          setPopup({
            popup_status: "none",
            popup_error: "popup_success",
          });

          nav("/otp");
        }, 1000);
      }, 2000);
    }

    setError(previousErrors);
  };
  return (
    <div>
      <div className="Login">
        <h1>LOGIN</h1>
        <form onSubmit={handlesubmit}>
          <div>
            <input
              type="text"
              placeholder="example@email.com"
              className="Email"
              id="email"
              onChange={handleInput}
              onBlur={emailvalidation}
              ref={emailRef}
            />
          </div>
          {/* <div>
            {error.email.required ? (
              <p id="emailmsg">Enter an email address</p>
            ) : null}
            {error.email.invalid ? (
              <p id="emailmsg">Enter a valid email address</p>
            ) : null}
          </div> */}
          <div>
            <Button
              type="submit"
              value="Send OTP"
              colors="btndarkslategray pad_square"
            ></Button>

            <Loader display={loader} />
            <Popup
              display={popup.popup_status}
              errorType={popup.popup_error}
              message={popup.message}
            ></Popup>
          </div>
        </form>

        <div className="Either">
          <div className="Line1"></div>
          <div className="Or">OR</div>
          <div className="Line2"></div>
        </div>
        <div>
          <input
            type="Submit"
            value={"Login with Google"}
            className="GoogleButton"
          />
          <img
            className="Google"
            src={Googleimage}
            alt="google"
            width="40px"
            height="40px"
          />
        </div>
        <div className="CANA">
          <Link to="/SignUp" style={{ textDecoration: "none" }}>
            <p className="CNA">Create a New Account ?</p>
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
export default Login;
