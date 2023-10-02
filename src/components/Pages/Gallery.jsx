import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Header from "./Header";
import gsap from "gsap";
import Galleryimaged from "../../Images/Gallery1.jpeg";
import Galleryimage from "../../Images/Gallery2.jpeg";
import GalleryImage from "../../Images/Gallery3.jpeg";
import Galleryimages from "../../Images/Gallery4.jpeg";
import Galleryedimaged from "../../Images/Gallery5.jpeg";
const Gallery = () => {
  const images = [
    Galleryimaged,
    Galleryimage,
    GalleryImage,
    Galleryimages,
    Galleryedimaged,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const switchImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const timer = setTimeout(switchImage, 3000);
  }, [currentIndex]);
  const handleImageHover = (index) => {
    gsap.to(`#img-${index}`, { opacity: 0.5, duration: 0.3 });
  };

  const handleImageLeave = (index) => {
    gsap.to(`#img-${index}`, { opacity: 1, duration: 0.3 });
  };

  return (
    <div>
      <Header />
      <div className="OPG">
        <p className="OPetsGallery">OUR Pets GALLERY</p>
      </div>
      <div className="Sentences">
        <p className="Cutenessandlove ">
          Unleash the cuteness and fall in love with{" "}
        </p>
        <p className="OFF">our furry family.</p>
      </div>
      <div className="AllAnimalsGallery">
        <div className="AllPetGallery">
          {images.map((image, index) => (
            <img
              key={index}
              className={`Gallery${index + 1}`}
              src={image}
              alt={`petanimals ${index + 1}`}
              width="200px"
              height="200px"
              style={{
                display: "block",
                cursor:"pointer",
              }}
              onMouseEnter={() => handleImageHover(index)}
              onMouseLeave={() => handleImageLeave(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
