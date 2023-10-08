import React, { useEffect, useState } from "react";
import Fishimage from "../../../Images/CommonCrap.jpg";
import FishImage from "../../../Images/GoldFish.jpg";
import Fishimages from "../../../Images/Oscar.jpg";
import Fishimaged from "../../../Images/SwordFish.jpg";
import { Link } from "react-router-dom";
const Fishes = () => {
  const [showDetails, setShowDetails] = useState({
    "Common Crap": false,
    "Sword Fish": false,
    Oscar: false,
    "Gold Fish": false,
  });
  const toggleDetails = (RabbitName) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [RabbitName]: !prevState[RabbitName],
    }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails({
        "Common Crap": false,
        "Sword Fish": false,
        Oscar: false,
        "Gold Fish": false,
      });
    }, 100000);
  });
  return (
    <div className="AllPetsforFish">
      <div className="CommonCrap">
        <Link to="/commoncrap" style={{ textDecoration: "none" }}>
          <img
            className="FishImage"
            src={Fishimage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="CC">Common Crap</h4>
          <h4 className="Lifespan">47Yrs Span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Common Crap")}>
          {showDetails["Common Crap"] ? "Less" : "More"}
        </button>
        {showDetails["Common Crap"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="SwordFish">
        <Link to="/swordfish" style={{ textDecoration: "none" }}>
          <img
            className="FishImage1"
            src={Fishimaged}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="SF">Sword Fish</h4>
          <h4 className="Lifespan">9yrs Span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Sword Fish")}>
          {showDetails["Sword Fish"] ? "Less" : "More"}
        </button>
        {showDetails["Sword Fish"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="Oscar">
        <Link to="/oscar" style={{ textDecoration: "none" }}>
          <img
            className="FishImage2"
            src={Fishimages}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="O">Oscar</h4>
          <h4 className="Lifespan">10-20yrs Span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Oscar")}>
          {showDetails["Oscar"] ? "Less" : "More"}
        </button>
        {showDetails["Oscar"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="GoldFish">
        <Link to="/goldfish" style={{ textDecoration: "none" }}>
          <img
            className="FishImage3"
            src={FishImage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="GF">Gold Fish</h4>
          <h4 className="Lifespan">30Yrs Span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Gold Fish")}>
          {showDetails["Gold Fish"] ? "Less" : "More"}
        </button>
        {showDetails["Gold Fish"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Fishes;
