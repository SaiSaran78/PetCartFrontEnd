import React, { useState, useEffect } from "react";
import "./Collections.css";
import { useParams } from "react-router-dom";
import Cat from "./cat";
import Dog from "./Dog";
import Rabbit from "./Rabbit";
import Hamster from "./Hamster";
import Birds from "./Birds";
import Fishes from "./Fishes";
import Header from "./Header";

const Collections = (props) => {
  const [selectedAnimal, setSelectedAnimal] = useState("cats");
  const validAnimals = [
    "cats",
    "dogs",
    "rabbits",
    "hamsters",
    "birds",
    "fishes",
  ];
  const handleAnimalChange = (animal) => {
    if (validAnimals.includes(animal)) {
      setSelectedAnimal(animal);
    }
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const animalParam = params.get("animal");
    if (animalParam) {
      setSelectedAnimal(animalParam.toLowerCase());
    }
  }, []);

  const renderAnimalComponent = () => {
    switch (selectedAnimal) {
      case "cats":
        return <Cat />;
      case "dogs":
        return <Dog />;
      case "rabbits":
        return <Rabbit />;
      case "hamsters":
        return <Hamster />;
      case "birds":
        return <Birds />;
      case "fishes":
        return <Fishes />;
      default:
        return null;
    }
  };
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="OBCS">
        <p className="OBC">OUR BEST COLLECTION</p>
      </div>
      <div className="allnames">
        <div className="animal-option">
          <button
            onClick={() => handleAnimalChange("cats")}
            className={`button ${selectedAnimal === "cats" ? "active" : ""}`}
          >
            cats
          </button>
        </div>
        <div className="animal-option">
          <button
            onClick={() => handleAnimalChange("dogs")}
            className={`button ${selectedAnimal === "dogs" ? "active" : ""}`}
          >
            dogs
          </button>
        </div>
        <div className="animal-option">
          <button
            onClick={() => handleAnimalChange("rabbits")}
            className={`button ${selectedAnimal === "rabbits" ? "active" : ""}`}
          >
            rabbits
          </button>
        </div>
        <div className="animal-option">
          <button
            onClick={() => handleAnimalChange("hamsters")}
            className={`button ${
              selectedAnimal === "hamsters" ? "active" : ""
            }`}
          >
            hamsters
          </button>
        </div>
        <div className="animal-option">
          <button
            onClick={() => handleAnimalChange("birds")}
            className={`button ${selectedAnimal === "birds" ? "active" : ""}`}
          >
            birds
          </button>
        </div>
        <div className="animal-option">
          <button
            onClick={() => handleAnimalChange("fishes")}
            className={`button ${selectedAnimal === "fishes" ? "active" : ""}`}
          >
            fishes
          </button>
        </div>
      </div>

      <div>{renderAnimalComponent()}</div>
    </div>
  );
};
export default Collections;
