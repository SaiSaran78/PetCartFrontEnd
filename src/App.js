import React, { useState } from "react";
import SignUP from "./components/Pages/SignUp";
import Login from "./components/Pages/Login";
import OTP from "./components/Pages/OTP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/LandingPath";
import AboutUs from "./components/Pages/AboutUs";
import Collections from "./components/Pages/Collections";
import Gallery from "./components/Pages/Gallery";
import Cart from "./components/Pages/Cart";
import SignUpOTP from "./components/Pages/SignUpOTP";
import Page404 from "./components/Pages/Page404";
function App() {
  const [status, setStatus] = useState("Logout");
  function loginStatus(data) {
    setStatus(data);
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUP />} />
          <Route path="/signupotp" element={<SignUpOTP update={loginStatus}/>} />
          <Route path="/" element={<Login />} />
          <Route path="/otp" element={<OTP update={loginStatus} />} />
          <Route
            path="/home"
            element={<Home update={loginStatus} status={status} />}
          />
          <Route
            path="/aboutus"
            element={<AboutUs update={loginStatus} status={status} />}
          />
          <Route
            path="/collections"
            element={<Collections update={loginStatus} status={status} />}
          />
          <Route
            path="/gallery"
            element={<Gallery update={loginStatus} status={status} />}
          />
          <Route
            path="/cart"
            element={<Cart update={loginStatus} status={status} />}
          />
          <Route
            path="/*"
            element={<Page404 update={loginStatus} status={status} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
