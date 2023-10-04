import React, { useEffect, useState } from "react";
import Birdimage from "../../../Images/AfricanGrey.avif";
import BirdImage from "../../../Images/ChatteringLory.avif";
import Birdimages from "../../../Images/ECLECTUS PARROT.avif";
import Birdimaged from "../../../Images/GreyCocktiel.avif";
import { Link } from "react-router-dom";
const Birds = () => {
  const [showDetails, setShowDetails] = useState({
    "African Grey": false,
    "Chattering Lory": false,
    "Eclectus Parrot": false,
    "Grey Cocktiel": false,
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
        "African Grey": false,
        "Chattering Lory": false,
        "Eclectus Parrot": false,
        "Grey Cocktiel": false,
      });
    }, 100000);
  });
  return (
    <div className="AllPetsforBirds">
      <div className="AfricanGrey">
        <Link to="/africangrey" style={{ textDecoration: "none" }}>
          <img
            className="BirdImage"
            src={Birdimage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="AG">African Grey</h4>
          <h4 className="Lifespan">40-50Yrs Span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("African Grey")}>
          {showDetails["African Grey"] ? "Less" : "More"}
        </button>
        {showDetails["African Grey"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="ChatteringLory">
        <Link to="/chatteringlory" style={{ textDecoration: "none" }}>
          <img
            className="BirdImage1"
            src={BirdImage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="CL">Chattering Lory</h4>
          <h4 className="Lifespan">20 yrs Span</h4>
        </Link>
        <button
          className="More"
          onClick={() => toggleDetails("Chattering Lory")}
        >
          {showDetails["Chattering Lory"] ? "Less" : "More"}
        </button>
        {showDetails["Chattering Lory"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="EclectusParrot">
        <Link to="/eclectusparrot" style={{ textDecoration: "none" }}>
          <img
            className="BirdImage2"
            src={Birdimages}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="EP">Eclectus Parrot</h4>
          <h4 className="Lifespan">30-40yrs Span</h4>
        </Link>
        <button
          className="More"
          onClick={() => toggleDetails("Eclectus Parrot")}
        >
          {showDetails["Eclectus Parrot"] ? "Less" : "More"}
        </button>
        {showDetails["Eclectus Parrot"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="GreyCocktiel">
        <Link to="/greycocktiel" style={{ textDecoration: "none" }}>
          <img
            className="BirdImage3"
            src={Birdimaged}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="GC">Grey Cocktiel</h4>
          <h4 className="Lifespan">16-25Yrs Span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Grey Cocktiel")}>
          {showDetails["Grey Cocktiel"] ? "Less" : "More"}
        </button>
        {showDetails["Grey Cocktiel"] && (
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
export default Birds;
