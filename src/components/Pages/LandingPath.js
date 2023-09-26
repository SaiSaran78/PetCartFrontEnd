import React from "react";
import "./LandingPath.css";
import Petanimals from "../../Images/Image3.jpg";
import Header from "./Header";

const LandingPath = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div class="AllPetAnimals">
        <div>
          <p className="Details">
            Find Cute And Smart Pets <br /> To Play with You
          </p>
          <p className="SomeMore">
            We Provide Food,Equipment and we <br /> provide pets too
          </p>
          <div className="CustomerCollection">
            <div className="PeoplesVisits">
              <div className="Peoples">2.5 K+</div>
              <div className="Customers">Customers</div>
            </div>
            <div className="NoofCollections">
              <div className="CollectionsNumbers">300+</div>
              <div className="CollectionHeading">Collections</div>
            </div>
            <div>
              <div className="Explore">
                <button className="Explored">Explore</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="Petanimals"
            src={Petanimals}
            alt="petanimals"
            width="600px"
            height="510px"
          />
        </div>
      </div>
    </div>
  );
};
export default LandingPath;
