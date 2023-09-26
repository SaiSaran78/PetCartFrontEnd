import React, { useState, useEffect } from "react";
import Rabbitimage from "../../Images/Alaska schwarz rabbit.webp";
import RabbitImage from "../../Images/American Rabbit.webp";
import Rabbitimages from "../../Images/Angora Rabbit.webp";
import Rabbitimaged from "../../Images/Argente rabbit.webp";
const Rabbit = () => {
  const [showDetails, setShowDetails] = useState({
    "AlaskaSchwarz Rabbit": false,
    "American Rabbit": false,
    "Angora Rabbit": false,
    "Argente Rabbit": false,
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
        "AlaskaSchwarz Rabbit": false,
        "American Rabbit": false,
        "Angora Rabbit": false,
        "Argente Rabbit": false,
      });
    }, 100000);
  });
  return (
    <div className="AllPetsforRabbit">
      <div className="AlaskaSchwarzRabbit">
        <img
          className="RabbitImage"
          src={Rabbitimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ASR">AlaskaRabbit</h4>
        <h4 className="Lifespan">7-10Yrs span</h4>
        <button
          className="More"
          onClick={() => toggleDetails("AlaskaSchwarz Rabbit")}
        >
          {showDetails["AlaskaSchwarz Rabbit"] ? "Less" : "More"}
        </button>
        {showDetails["AlaskaSchwarz Rabbit"] && (
          <div>
            <p>HINDUSTAN CATTERY
              <br />
              Pedigree Food</p>
          </div>
        )}
      </div>
      <div className="AmericanRabbit">
        <img
          className="RabbitImage1"
          src={RabbitImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="AR">AmericanRabbit</h4>
        <h4 className="Lifespan">8-10yrs span</h4>
        <button
          className="More"
          onClick={() => toggleDetails("American Rabbit")}
        >
          {showDetails["American Rabbit"] ? "Less" : "More"}
        </button>
        {showDetails["American Rabbit"] && (
          <div>
            <p>HINDUSTAN CATTERY
              <br />
              Pedigree Food</p>
          </div>
        )}
      </div>
      <div className="AngoraRabbit">
        <img
          className="RabbitImage2"
          src={Rabbitimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ANR">AngoraRabbit</h4>
        <h4 className="Lifespan">7-12yrs span</h4>
        <button className="More" onClick={() => toggleDetails("Angora Rabbit")}>
          {showDetails["Angora Rabbit"] ? "Less" : "More"}
        </button>
        {showDetails["Angora Rabbit"] && (
          <div>
            <p>HINDUSTAN CATTERY
              <br />
              Pedigree Food</p>
          </div>
        )}
      </div>
      <div className="ArgenteRabbit">
        <img
          className="RabbitImage3"
          src={Rabbitimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="ARR">ArgenteRabbit</h4>
        <h4 className="Lifespan">7-10yrs span</h4>
        <button
          className="More"
          onClick={() => toggleDetails("Argente Rabbit")}
        >
          {showDetails["Argente Rabbit"] ? "Less" : "More"}
        </button>
        {showDetails["Argente Rabbit"] && (
          <div>
            <p>HINDUSTAN CATTERY
              <br />
              Pedigree Food</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Rabbit;
