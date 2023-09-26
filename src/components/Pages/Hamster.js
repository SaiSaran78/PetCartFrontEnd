import React, { useState, useEffect } from "react";
import Hamsterimage from "../../Images/Campbells russian dwarf.avif";
import HamsterImage from "../../Images/Chinese hamster.webp";
import Hamsterimages from "../../Images/robo dwarf.avif";
import Hamsterimaged from "../../Images/SyrianHamster.avif";
const Hamster = () => {
  const [showDetails, setShowDetails] = useState({
    "CampbellsRussian Drawf": false,
    "Chinese Hamster": false,
    "Robo Drawf": false,
    "Syrian Hamstert": false,
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
        "CampbellsRussian Drawf": false,
        "Chinese Hamster": false,
        "Robo Drawf": false,
        "Syrian Hamstert": false,
      });
    }, 100000);
  });
  return (
    <div className="AllPetsforHamster">
      <div className="CampbellsRussianDrawf">
        <img
          className="HamsterImage"
          src={Hamsterimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CRD">CampbellsRussian</h4>
        <h4 className="Lifespan">2.5-3Yrs span</h4>
        <button
          className="More"
          onClick={() => toggleDetails("CampbellsRussian Drawf")}
        >
          {showDetails["CampbellsRussian Drawf"] ? "Less" : "More"}
        </button>
        {showDetails["CampbellsRussian Drawf"] && (
          <div>
            <p>HINDUSTAN CATTERY
              <br />
              Pedigree Food</p>
          </div>
        )}
      </div>
      <div className="ChineseHamster">
        <img
          className="HamsterImage1"
          src={HamsterImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="CH">ChineseHamster</h4>
        <h4 className="Lifespan">2.5-3yrs span</h4>
        <button
          className="More"
          onClick={() => toggleDetails("Chinese Hamster")}
        >
          {showDetails["Chinese Hamster"] ? "Less" : "More"}
        </button>
        {showDetails["Chinese Hamster"] && (
          <div>
            <p>HINDUSTAN CATTERY
              <br />
              Pedigree Food</p>
          </div>
        )}
      </div>
      <div className="RoboDrawf">
        <img
          className="HamsterImage2"
          src={Hamsterimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="RD">RoboDrawf</h4>
        <h4 className="Lifespan">3yrs span</h4>
        <button className="More" onClick={() => toggleDetails("Robo Drawf")}>
          {showDetails["Robo Drawf"] ? "Less" : "More"}
        </button>
        {showDetails["Robo Drawf"] && (
          <div>
            <p>HINDUSTAN CATTERY
              <br />
              Pedigree Food</p>
          </div>
        )}
      </div>
      <div className="SyrianHamster">
        <img
          className="HamsterImage3"
          src={Hamsterimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SH">SyrianHamster</h4>
        <h4 className="Lifespan">2-3yrs span</h4>
        <button
          className="More"
          onClick={() => toggleDetails("Syrian Hamster")}
        >
          {showDetails["Syrian Hamster"] ? "Less" : "More"}
        </button>
        {showDetails["Syrian Hamster"] && (
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
export default Hamster;
