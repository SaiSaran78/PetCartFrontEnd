import React, { useState } from "react";
import SignUP from "./components/Pages/SignUp/SignUp";
import Login from "./components/Pages/Login/Login";
import OTP from "./components/Pages/LoginOTP/OTP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/LandingPath";
import AboutUs from "./components/Pages/AboutUs";
import Collections from "./components/Pages/Collections";
import Gallery from "./components/Pages/Gallery";
import Cart from "./components/Pages/Cart";
import SignUpOTP from "./components/Pages/SignUpOTP/SignUpOTP";
import Page404 from "./components/Pages/Page404";
import Orders from "./components/Pages/orders";
import YourAccount from "./components/Pages/YourAccount";
import ScottishFoldCat from "./components/Pages/ScottishFoldCat";
import PersianCat from "./components/Pages/PersianCat";
import SnoeShoe from "./components/Pages/SnoeShoe";
import Shorthair from "./components/Pages/Shorthair";
import AfghanHounds from "./components/Pages/AfganHound";
import AkitaDog from "./components/Pages/Akitadog";
import BassetHound from "./components/Pages/BassetHoundDog";
import BullDog from "./components/Pages/BullDog";
import AlaskaRabbit from "./components/Pages/AlaskaSchwarz";
import AmericanRabbit from "./components/Pages/AmericaRabbit";
import AngoraRabbit from "./components/Pages/AngoraRabbit";
import ArgenteRabbit from "./components/Pages/ArgenteRabbit";
import CampbellsRussianHamster from "./components/Pages/Campbells";
import ChineseHamster from "./components/Pages/Chinese";
import RoboDrawf from "./components/Pages/Robodrawf";
import SyrianHamster from "./components/Pages/Syrian";
import AfricanGrey from "./components/Pages/AfricanGrey";
import ChatteringLory from "./components/Pages/ChatteringLory";
import ECLECTUSParrot from "./components/Pages/Eclectusparrot";
import GreyCocktiel from "./components/Pages/GreyCocktiel";
import CommonCrap from "./components/Pages/CommonCrap";
import GoldFish from "./components/Pages/GoldFish";
import Oscar from "./components/Pages/Oscar";
import SwordFish from "./components/Pages/SwordFish";
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
          <Route
            path="/signupotp"
            element={<SignUpOTP update={loginStatus} />}
          />
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
          <Route
            path="/orders"
            element={<Orders update={loginStatus} status={status} />}
          />
          <Route
            path="/your account"
            element={<YourAccount update={loginStatus} status={status} />}
          />
          <Route
            path="/scottishfoldcat"
            // component='Collections'
            element={<ScottishFoldCat update={loginStatus} status={status} />}
          />
          <Route
            path="/persiancat"
            // component='Collections'
            element={<PersianCat update={loginStatus} status={status} />}
          />
          <Route
            path="/snoeshoe"
            // component='Collections'
            element={<SnoeShoe update={loginStatus} status={status} />}
          />
          <Route
            path="/shorthair"
            // component='Collections'
            element={<Shorthair update={loginStatus} status={status} />}
          />
          <Route
            path="/afghanhounds"
            // component='Collections'
            element={<AfghanHounds update={loginStatus} status={status} />}
          />
          <Route
            path="/akitadog"
            // component='Collections'
            element={<AkitaDog update={loginStatus} status={status} />}
          />
          <Route
            path="/bassethound"
            // component='Collections'
            element={<BassetHound update={loginStatus} status={status} />}
          />
          <Route
            path="/bulldog"
            // component='Collections'
            element={<BullDog update={loginStatus} status={status} />}
          />
          <Route
            path="/alaskaschwarz"
            // component='Collections'
            element={<AlaskaRabbit update={loginStatus} status={status} />}
          />
          <Route
            path="/american"
            // component='Collections'
            element={<AmericanRabbit update={loginStatus} status={status} />}
          />
          <Route
            path="/angora"
            // component='Collections'
            element={<AngoraRabbit update={loginStatus} status={status} />}
          />
          <Route
            path="/argente"
            // component='Collections'
            element={<ArgenteRabbit update={loginStatus} status={status} />}
          />
          <Route
            path="/campbellsrussian"
            // component='Collections'
            element={
              <CampbellsRussianHamster update={loginStatus} status={status} />
            }
          />
          <Route
            path="/chinesehamster"
            // component='Collections'
            element={<ChineseHamster update={loginStatus} status={status} />}
          />
          <Route
            path="/robodrawf"
            // component='Collections'
            element={<RoboDrawf update={loginStatus} status={status} />}
          />
          <Route
            path="/syrian"
            // component='Collections'
            element={<SyrianHamster update={loginStatus} status={status} />}
          />
          <Route
            path="/africangrey"
            // component='Collections'
            element={<AfricanGrey update={loginStatus} status={status} />}
          />
          <Route
            path="/chatteringlory"
            // component='Collections'
            element={<ChatteringLory update={loginStatus} status={status} />}
          />
          <Route
            path="/eclectusparrot"
            // component='Collections'
            element={<ECLECTUSParrot update={loginStatus} status={status} />}
          />
          <Route
            path="/greycocktiel"
            // component='Collections'
            element={<GreyCocktiel update={loginStatus} status={status} />}
          />
          <Route
            path="/commoncrap"
            // component='Collections'
            element={<CommonCrap update={loginStatus} status={status} />}
          />
          <Route
            path="/swordfish"
            // component='Collections'
            element={<SwordFish update={loginStatus} status={status} />}
          />
          <Route
            path="/oscar"
            // component='Collections'
            element={<Oscar update={loginStatus} status={status} />}
          />
          <Route
            path="/goldfish"
            // component='Collections'
            element={<GoldFish update={loginStatus} status={status} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
