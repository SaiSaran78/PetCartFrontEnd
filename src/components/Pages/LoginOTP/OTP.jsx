import React, { useEffect, useRef, useState } from "react";
import "./OTP.css";
import Googleimage from "../../../Images/Image.png";
import Petimage from "../../../Images/Image2.png";
import { Link } from "react-router-dom";
import Button, { Loader, Popup } from "../../Assets/components";
import { useNavigate } from "react-router-dom";

const OTP = ({update}) => {
  const nav = useNavigate();
  const GoogleClick = () => {
    alert("Logging in with Google");
  };
  const checkInput = (e) => {
    const pattern = /[0-9 \d]/;
    if (!pattern.test(e.key)) {
      e.preventDefault();
    }
  };
  const validOTP = ["123456", "159875", "357895", "123789"];
  const [value, setValue] = useState({
    OTP1: "",
    OTP2: "",
    OTP3: "",
    OTP4: "",
    OTP5: "",
    OTP6: "",
  });
  const [error, setError] = useState({
    OTP: { required: false, invalid: false },
  });
  const [loader, setLoader] = useState("none");
  const [popup, setPopup] = useState({
    popup_status: "none",
    popup_error: "popup_error",
    message: "Invalid OTP",
  });
  const handleInputChange = (e) => {
    setError({ OTP: { required: false, invalid: false } });
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  useEffect(() => {
    inputRefs[0].current.focus();
  }, []);

  const handleKeyDown = (index, e) => {
    if (e.key >= "0" && e.key <= "9") {
      if (index < 5 && (index === 0 || value[`OTP${index}`] !== "")) {
        setTimeout(() => {
          inputRefs[index + 1].current.focus();
        }, 0);
      }
    } else if (e.key === "Backspace" && index > 0) {
      if (index > 0 && (index === 5 || value[`OTP${index}`] !== "")) {
        setTimeout(() => {
          inputRefs[index - 1].current.focus();
        }, 0);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let flag = false;
    const enteredOTP = Object.values(value).join("");
    if (enteredOTP.trim() === "") {
      setError({ OTP: { required: true } });
      flag = true;
    } else {
      setError({ OTP: { required: false } });
      flag = false;
    }

    if (!flag) {
      let userfound = false;

      validOTP.forEach((item) => {
        if (enteredOTP === item) {
          userfound = true;
        }
      });

      if (userfound) {
        setLoader("block");
        setTimeout(() => {
          setLoader("none");
          setPopup({
            popup_status: "block",
            popup_error: "popup_success",
            message: "OTP Successful",
          });

          setTimeout(() => {
            setPopup({
              popup_status: "none",
              popup_error: "popup_success",
              message: "",
            });
            update("Loggedin")
            nav("/home");
          }, 1000);
        }, 2000);
      } else {
        setLoader("block");
        setTimeout(() => {
          setPopup({
            popup_status: "block",
            popup_error: "popup_error",
            message: "Invalid OTP",
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
      }
    }
  };

  return (
    <div>
      <div className="otp">
        <div className="entertheotp">
          <h4>Verify OTP</h4>
          <form onSubmit={handleSubmit}>
            <div className="otpbox">
              <input
                type="text"
                placeholder="*"
                className="otpboxes"
                maxLength="1"
                name="OTP1"
                onChange={handleInputChange}
                onKeyPress={checkInput}
                ref={inputRefs[0]}
                onKeyDown={(e) => handleKeyDown(0, e)}
              />
              <input
                type="text"
                placeholder="*"
                className="otpboxes"
                maxLength="1"
                name="OTP2"
                onChange={handleInputChange}
                onKeyPress={checkInput}
                ref={inputRefs[1]}
                onKeyDown={(e) => handleKeyDown(1, e)}
              />
              <input
                type="text"
                placeholder="*"
                className="otpboxes"
                maxLength="1"
                name="OTP3"
                onChange={handleInputChange}
                onKeyPress={checkInput}
                ref={inputRefs[2]}
                onKeyDown={(e) => handleKeyDown(2, e)}
              />
              <input
                type="text"
                placeholder="*"
                className="otpboxes"
                maxLength="1"
                name="OTP4"
                onChange={handleInputChange}
                onKeyPress={checkInput}
                ref={inputRefs[3]}
                onKeyDown={(e) => handleKeyDown(3, e)}
              />
              <input
                type="text"
                placeholder="*"
                className="otpboxes"
                maxLength="1"
                name="OTP5"
                onChange={handleInputChange}
                onKeyPress={checkInput}
                ref={inputRefs[4]}
                onKeyDown={(e) => handleKeyDown(4, e)}
              />
              <input
                type="text"
                placeholder="*"
                className="otpboxes"
                maxLength="1"
                name="OTP6"
                onChange={handleInputChange}
                onKeyPress={checkInput}
                ref={inputRefs[5]}
                onKeyDown={(e) => handleKeyDown(5, e)}
              />
            </div>
            <div>
              {error.OTP.required ? (
                <p id="errormsgs">Enter the valid OTP</p>
              ) : null}
              {error.OTP.invalid ? <p id="errormsgs">Enter valid otp</p> : null}
            </div>
            <div>
              <Button value="Verify" colors="btndarkslategray pad_rec"></Button>
              <Loader display={loader} page="OTP" />
              <Popup
                display={popup.popup_status}
                errorType={popup.popup_error}
                pages="OTP"
                message={popup.message}
              ></Popup>
            </div>
          </form>

          <div className="Either1">
            <div className="Lines1"></div>
            <div className="Ors">OR</div>
            <div className="Lines2"></div>
          </div>
          <div>
            <input
              type="Submit"
              value={"Login with Google"}
              className="GoogleButtons"
              onClick={GoogleClick}
            ></input>
            <img
              className="Googles"
              src={Googleimage}
              alt="google"
              width="40px"
              height="40px"
            />
          </div>
        </div>
      </div>

      <div className="Sides">
        <span className="Circles"></span>
        <img
          className="Pets"
          src={Petimage}
          alt="Pet"
          width="25px"
          height="20px"
        />
        <span className="Circles1"></span>
      </div>
    </div>
  );
};
export default OTP;
