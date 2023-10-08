import React from "react";
import "./Gallery.css";
import Catimage from "../../../Images/Imaged1.jpeg";
import CatImage from "../../../Images/Imaged3.jpeg";
import Catimages from "../../../Images/Imaged4.jpeg";
import Catimaged from "../../../Images/Imaged5.jpeg";
import Dogimage from "../../../Images/Afghan Hounds Dog.webp";
import DogImage from "../../../Images/Akita Dog.webp";
import Dogimages from "../../../Images/Basset Hound Dog .webp";
import Dogimaged from "../../../Images/Bull-dog.webp";
import Rabbitimage from "../../../Images/Alaska schwarz rabbit.webp";
import RabbitImage from "../../../Images/American Rabbit.webp";
import Rabbitimages from "../../../Images/Angora Rabbit.webp";
import Rabbitimaged from "../../../Images/Argente rabbit.webp";
import Hamsterimage from "../../../Images/Campbells russian dwarf.avif";
import HamsterImage from "../../../Images/Chinese hamster.webp";
import Hamsterimages from "../../../Images/robo dwarf.avif";
import Hamsterimaged from "../../../Images/SyrianHamster.avif";
import Birdimage from "../../../Images/AfricanGrey.avif";
import BirdImage from "../../../Images/ChatteringLory.avif";
import Birdimages from "../../../Images/ECLECTUS PARROT.avif";
import Birdimaged from "../../../Images/GreyCocktiel.avif";
import Fishimage from "../../../Images/CommonCrap.jpg";
import FishImage from "../../../Images/GoldFish.jpg";
import Fishimages from "../../../Images/Oscar.jpg";
import Fishimaged from "../../../Images/SwordFish.jpg";
import Header from "../Header/Header";

const Gallery = (props) => {
  return (
    <div>
      <Header update={props.update} status={props.status} />
      <div className="OG">
        <p className="OGallery">OUR GALLERY</p>
      </div>
      <div className="AllPets">
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
          <button className="More">More</button>
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
          <button className="More">More</button>
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
          <button className="More">More</button>
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
          <button className="More">More</button>
        </div>
        <div className="AfghanHounds">
          <img
            className="DogImage"
            src={Dogimage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="AH">Afghan Hounds</h4>
          <h4 className="Lifespan">13-14Yrs span</h4>
          <button className="More">More</button>
        </div>
        <div className="AkitaDogs">
          <img
            className="DogImage1"
            src={DogImage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="AD">Akita Dog</h4>
          <h4 className="Lifespan">10-12yrs span</h4>
          <button className="More">More</button>
        </div>
        <div className="BassetHoundDog">
          <img
            className="DogImage2"
            src={Dogimages}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="BHD">BassetHound</h4>
          <h4 className="Lifespan">9-10yrs span</h4>
          <button className="More">More</button>
        </div>
        <div className="BullDog">
          <img
            className="DogImage3"
            src={Dogimaged}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="BD">BullDog</h4>
          <h4 className="Lifespan">7-8yrs span</h4>
          <button className="More">More</button>
        </div>
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
          <button className="More">More</button>
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
          <button className="More">More</button>
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
          <button className="More">More</button>
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
          <button className="More">More</button>
        </div>
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
          <button className="More">More</button>
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
          <button className="More">More</button>
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
          <button className="More">More</button>
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
          <button className="More">More</button>
        </div>
        <div className="AfricanGrey">
          <img
            className="BirdImage"
            src={Birdimage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="AG">African Grey</h4>
          <h4 className="Lifespan">40-50Yrs Span</h4>
          <button className="More">More</button>
        </div>
        <div className="ChatteringLory">
          <img
            className="BirdImage1"
            src={Birdimaged}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="CL">Chattering Lory</h4>
          <h4 className="Lifespan">20 yrs Span</h4>
          <button className="More">More</button>
        </div>
        <div className="EclectusParrot">
          <img
            className="BirdImage2"
            src={Birdimages}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="EP">Eclectus Parrot</h4>
          <h4 className="Lifespan">30-40yrs Span</h4>
          <button className="More">More</button>
        </div>
        <div className="GreyCocktiel">
          <img
            className="BirdImage3"
            src={BirdImage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="GC">Grey Cocktiel</h4>
          <h4 className="Lifespan">16-25Yrs Span</h4>
          <button className="More">More</button>
        </div>
        <div className="CommonCrap">
          <img
            className="FishImage"
            src={Fishimage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="CC">Common Crap</h4>
          <h4 className="Lifespan">47Yrs Span</h4>
          <button className="More">More</button>
        </div>
        <div className="SwordFish">
          <img
            className="FishImage1"
            src={Fishimaged}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="SF">Sword Fish</h4>
          <h4 className="Lifespan">9yrs Span</h4>
          <button className="More">More</button>
        </div>
        <div className="Oscar">
          <img
            className="FishImage2"
            src={Fishimages}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="O">Oscar</h4>
          <h4 className="Lifespan">10-20yrs Span</h4>
          <button className="More">More</button>
        </div>
        <div className="GoldFish">
          <img
            className="FishImage3"
            src={FishImage}
            alt="petanimals"
            width="200px"
            height="200px"
          />
          <h4 className="GF">Gold Fish</h4>
          <h4 className="Lifespan">30Yrs Span</h4>
          <button className="More">More</button>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
