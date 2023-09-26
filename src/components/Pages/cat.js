import React, { useState, useEffect } from "react";
import Catimage from "../../Images/Imaged1.jpeg";
import CatImage from "../../Images/Imaged3.jpeg";
import Catimages from "../../Images/Imaged4.jpeg";
import Catimaged from "../../Images/Imaged5.jpeg";
const Cat = () => {
  const [showDetails, setShowDetails] = useState({
    "Scottish Fold": false,
    "Persian Cat": false,
    Snoeshoe: false,
    Shorthair: false,
  });
  const toggleDetails = (catName) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [catName]: !prevState[catName],
    }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails({
        "Scottish Fold": false,
        "Persian Cat": false,
        Snoeshoe: false,
        Shorthair: false,
      });
    }, 100000);
  });
  return (
    <div className="AllPetsforcats">
      <div className="ScottishFold">
        <img
          className="CatImage"
          src={Catimage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SF">Scottish Fold</h4>
        <h4 className="Mo8">8 Months Old</h4>
        <button className="More" onClick={() => toggleDetails("Scottish Fold")}>
          {showDetails["Scottish Fold"] ? "Less" : "More"}
        </button>
        {showDetails["Scottish Fold"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Dr. Elsey's cleanprotein Salmon Formula Grain-Free Dry Cat Food
            </p>
          </div>
        )}
      </div>
      <div className="PersianCat">
        <img
          className="CatImage1"
          src={Catimaged}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="PC">Persian Cat</h4>
        <h4 className="Mo12">12 Months Old</h4>
        <button className="More" onClick={() => toggleDetails("Persian Cat")}>
          {showDetails["Persian Cat"] ? "Less" : "More"}
        </button>
        {showDetails["Persian Cat"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Dr. Elsey's cleanprotein Salmon Formula Grain-Free Dry Cat Food
            </p>
          </div>
        )}
      </div>
      <div className="Snoeshoe">
        <img
          className="CatImage2"
          src={Catimages}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SS">Snoeshoe</h4>
        <h4 className="Mo6">6 Months Old</h4>
        <button className="More" onClick={() => toggleDetails("Snoeshoe")}>
          {showDetails["Snoeshoe"] ? "Less" : "More"}
        </button>
        {showDetails["Snoeshoe"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Dr. Elsey's cleanprotein Salmon Formula Grain-Free Dry Cat Food
            </p>
          </div>
        )}
      </div>
      <div className="Shorthair">
        <img
          className="CatImage3"
          src={CatImage}
          alt="petanimals"
          width="200px"
          height="200px"
        />
        <h4 className="SH">Shorthair</h4>
        <h4 className="Mo6">6 Months Old</h4>
        <button className="More" onClick={() => toggleDetails("Shorthair")}>
          {showDetails["Shorthair"] ? "Less" : "More"}
        </button>
        {showDetails["Shorthair"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Dr. Elsey's cleanprotein Salmon Formula Grain-Free Dry Cat Food
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cat;
