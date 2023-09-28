import React, { useState, useEffect } from "react";
import Dogimage from "../../Images/Afghan Hounds Dog.webp";
import DogImage from "../../Images/Akita Dog.webp";
import Dogimages from "../../Images/Basset Hound Dog .webp";
import Dogimaged from "../../Images/Bull-dog.webp";
import { Link } from "react-router-dom";
const Dog = () => {
  const [showDetails, setShowDetails] = useState({
    "Afghan Hounds": false,
    "Akita Dogs": false,
    "Basset Hound": false,
    "Bull Dog": false,
  });
  const toggleDetails = (DogName) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [DogName]: !prevState[DogName],
    }));
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDetails({
        "Afghan Hounds": false,
        "Akita Dogs": false,
        "Basset Hound": false,
        "Bull Dog": false,
      });
    }, 100000);
  });
  return (
    <div className="AllPetsforDogs">
      <div className="AfghanHounds">
        <Link to="/afghanhounds" style={{ textDecoration: "none" }}>
          <img
            className="DogImage"
            src={Dogimage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="AH">Afghan Hounds</h4>
          <h4 className="Lifespan">13-14Yrs span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Afghan Hounds")}>
          {showDetails["Afghan Hounds"] ? "Less" : "More"}
        </button>
        {showDetails["Afghan Hounds"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="AkitaDogs">
        <Link to="/akitadog" style={{ textDecoration: "none" }}>
          <img
            className="DogImage1"
            src={DogImage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="AD">Akita Dog</h4>
          <h4 className="Lifespan">10-12yrs span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Akita Dogs")}>
          {showDetails["Akita Dogs"] ? "Less" : "More"}
        </button>
        {showDetails["Akita Dogs"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="BassetHoundDog">
        <Link to="/bassethound" style={{ textDecoration: "none" }}>
          <img
            className="DogImage2"
            src={Dogimages}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="BHD">BassetHound</h4>
          <h4 className="Lifespan">9-10yrs span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Basset Hound")}>
          {showDetails["Basset Hound"] ? "Less" : "More"}
        </button>
        {showDetails["Basset Hound"] && (
          <div>
            <p>
              HINDUSTAN CATTERY
              <br />
              Pedigree Food
            </p>
          </div>
        )}
      </div>
      <div className="BullDog">
        <Link to="/bulldog" style={{ textDecoration: "none" }}>
          <img
            className="DogImage3"
            src={Dogimaged}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="BD">BullDog</h4>
          <h4 className="Lifespan">7-8yrs span</h4>
        </Link>
        <button className="More" onClick={() => toggleDetails("Bull Dog")}>
          {showDetails["Bull Dog"] ? "Less" : "More"}
        </button>
        {showDetails["Bull Dog"] && (
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
export default Dog;
