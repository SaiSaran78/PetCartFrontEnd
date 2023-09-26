import React from "react";
import "./AboutUs.css";
import PetImage from "../../Images/Image4.jpg";
import PetImages from "../../Images/Image5.jpg";
import PetImaged from "../../Images/Image6.jpg";
import Petimaged from "../../Images/Image7.png";
import Header from "./Header";
const AboutUs = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="MYPNSTLH">
        <p className="MYPNS">
          MEET YOUR PET'S NEEDS SO <br />
          THEY LIVE HAPPILY
        </p>
      </div>
      <div className="PetThings">
        <div className="Animals">
          <h4 className="AHC">Animal Health Consultation</h4>
          <p className="FE">
            We Provide Food,Equipment and we <br /> provide pets too.In addition
            we
          </p>
          <img
            className="PetImage"
            src={PetImage}
            alt="petanimals"
            width="65px"
            height="50px"
          />
        </div>
        <div className="EF">
          <h4 className="BEPF">Buy Equipment and Pet Food</h4>
          <p className="Fe">
            We Provide Food,Equipment and we <br />
            provide pets too.In addition we
          </p>
          <img
            className="PetImages"
            src={PetImages}
            alt="petanimals"
            width="70px"
            height="70px"
          />
        </div>
        <div className="NewCollections">
          <h4 className="BNCP">Buy a new Collection of pets</h4>
          <p className="FEs">
            We Provide Food,Equipment and we <br /> provide pets too.In addition
            we
          </p>
          <img
            className="Petimages"
            src={PetImaged}
            alt="petanimals"
            width="50px"
            height="65px"
          />
        </div>
      </div>
      <div className="LargeCollectionPets">
        <div>
          <img
            className="Petimaged"
            src={Petimaged}
            alt="petanimals"
            width="650px"
            height="300px"
          />
        </div>
        <div>
          <p className="LCCP">
            Find A Large Collection of <br /> Complete Pets
          </p>
          <p className="Quatation">
            Let’s Start Your Journey with your <br /> beloved pets and enjoy
            life better.
          </p>
        </div>
        <div>
          <div>
            <button className="GetStarted">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
