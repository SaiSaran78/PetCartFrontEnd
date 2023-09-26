import React , {useState,useEffect} from "react";
import './Collections.css'
// import Petimage from '../../Images/Image2.png';
import Cat from "./cat";
import Dog from "./Dog";
import Rabbit from "./Rabbit";
import Hamster from "./Hamster";
import Birds from "./Birds";
import Fishes from "./Fishes";
// import { Link } from "react-router-dom";
// import { BsSearch,BsFillCartFill} from "react-icons/bs";
// import Button from "../Assets/components";
import Header from "./Header";


const Collections = (props) =>{
    const [selectedAnimal, setSelectedAnimal] = useState("cats");
    // below use state is witout name inside the used site
    // const [selectedAnimal, setSelectedAnimal] = useState(""); 

    const validAnimals = ["cats", "dogs", "rabbits", "hamsters", "birds", "fishes"];
    const handleAnimalChange = (animal) => {
        setSelectedAnimal(animal);
    };    
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
    useEffect(() => {
        // Check if there's a selected animal query parameter in the URL
        const params = new URLSearchParams(window.location.search);
        const animalParam = params.get("animal");
        if (animalParam && validAnimals.includes(animalParam.toLowerCase())) {
            setSelectedAnimal(animalParam.toLowerCase());
        }
    }, []);

    const animalButtons = [
        { name: "cats", label: "Cats" },
        { name: "dogs", label: "Dogs" },
        { name: "rabbits", label: "Rabbits" },
        { name: "hamsters", label: "Hamsters" },
        { name: "birds", label: "Birds" },
        { name: "fishes", label: "Fishes" },
    ];
    return (
        <div>
            <Header update={props.update} status={props.status} />
            <div className="OBCS">
                <p className="OBC">OUR BEST COLLECTION</p>
            </div>
            <div className="allnames">
                {animalButtons.map((animalButton) => (
                    <div className="animal-option" key={animalButton.name}>
                        <button
                            onClick={() => handleAnimalChange(animalButton.name)}
                            className={`button ${animalButton.name} ${selectedAnimal === animalButton.name ? "active" : ""}`}
                        >
                            {animalButton.label}
                        </button>
                    </div>
                ))}
            </div>
              
            <div>{renderAnimalComponent()}</div>
        </div>
    );
};

export default Collections;