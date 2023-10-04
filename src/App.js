import React, { useState } from "react";
import SignUP from "./components/Pages/SignUp/SignUp";
import Login from "./components/Pages/Login/Login";
import OTP from "./components/Pages/LoginOTP/OTP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/LandingPath";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Collections from "./components/Pages/Collections";
import Gallery from "./components/Pages/Gallery";
import Cart from "./components/Pages/Cart";
import SignUpOTP from "./components/Pages/SignUpOTP/SignUpOTP";
import Page404 from "./components/Pages/Page404";
import Orders from "./components/Pages/orders";
import YourAccount from "./components/Pages/YourAccount";
import ScottishFoldCat from "./components/Pages/ALLIndividualPetPages/ScottishFoldCat";
import PersianCat from "./components/Pages/ALLIndividualPetPages/PersianCat";
import SnoeShoe from "./components/Pages/ALLIndividualPetPages/SnoeShoe";
import Shorthair from "./components/Pages/ALLIndividualPetPages/Shorthair";
import AfghanHounds from "./components/Pages/ALLIndividualPetPages/AfganHound";
import AkitaDog from "./components/Pages/ALLIndividualPetPages/Akitadog";
import BassetHound from "./components/Pages/ALLIndividualPetPages/BassetHoundDog";
import BullDog from "./components/Pages/ALLIndividualPetPages/BullDog";
import AlaskaRabbit from "./components/Pages/ALLIndividualPetPages/AlaskaSchwarz";
import AmericanRabbit from "./components/Pages/ALLIndividualPetPages/AmericaRabbit";
import AngoraRabbit from "./components/Pages/ALLIndividualPetPages/AngoraRabbit";
import ArgenteRabbit from "./components/Pages/ALLIndividualPetPages/ArgenteRabbit";
import CampbellsRussianHamster from "./components/Pages/ALLIndividualPetPages/Campbells";
import ChineseHamster from "./components/Pages/ALLIndividualPetPages/Chinese";
import RoboDrawf from "./components/Pages/ALLIndividualPetPages/Robodrawf";
import SyrianHamster from "./components/Pages/ALLIndividualPetPages/Syrian";
import AfricanGrey from "./components/Pages/ALLIndividualPetPages/AfricanGrey";
import ChatteringLory from "./components/Pages/ALLIndividualPetPages/ChatteringLory";
import ECLECTUSParrot from "./components/Pages/ALLIndividualPetPages/Eclectusparrot";
import GreyCocktiel from "./components/Pages/ALLIndividualPetPages/GreyCocktiel";
import CommonCrap from "./components/Pages/ALLIndividualPetPages/CommonCrap";
import GoldFish from "./components/Pages/ALLIndividualPetPages/GoldFish";
import Oscar from "./components/Pages/ALLIndividualPetPages/Oscar";
import SwordFish from "./components/Pages/ALLIndividualPetPages/SwordFish";
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
