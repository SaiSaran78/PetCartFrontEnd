import React, { useState } from "react";
import "./Header.css";
import Petimage from "../../Images/Image2.png";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch, BsFillCartFill } from "react-icons/bs";
import Button from "../Assets/components";
import LandingPath from "./LandingPath";
import AboutUs from "./AboutUs";
import Collections from "./Collections";
import Gallery from "./Gallery.jsx";
import Cart from "./Cart";
import LoginDropDown from "./LoginDropDown";
const Header = (props) => {
  const [selectedAnimal, setSelectedAnimal] = useState("cats");
  const navigate = useNavigate();
  const [selectedAccountOption, setSelectedAccountOption] = useState(null);
  const [currentPage, setCurrentPage] = useState({
    LandingPath: false,
    AboutUs: false,
    Collections: false,
    Gallery: false,
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const toggleSearch = () => {
    setTimeout(() => {
      setIsSearchOpen(!isSearchOpen);
    }, 0);
  };
  const handleSearchSubmit = () => {
    const lowercaseSearchValue = searchValue.toLowerCase();
    const validAnimals = ["cat", "dog", "rabbit", "hamster", "bird", "fish"];

    if (validAnimals.includes(lowercaseSearchValue)) {
      setSelectedAnimal(lowercaseSearchValue);
      navigate(`/Collections?animal=${lowercaseSearchValue}`);
    } else {
      setTimeout(() => {
        switch (lowercaseSearchValue) {
          case "cats":
            setSelectedAnimal("cats");
            navigate(`/Collections?animal=cats`);
            break;
          case "dogs":
            setSelectedAnimal("dogs");
            navigate(`/Collections?animal=dogs`);
            break;
          case "rabbits":
            setSelectedAnimal("rabbits");
            navigate(`/Collections?animal=rabbits`);
            break;
          case "hamsters":
            setSelectedAnimal("hamsters");
            navigate(`/Collections?animal=hamsters`);
            break;
          case "birds":
            setSelectedAnimal("birds");
            navigate(`/Collections?animal=birds`);
            break;
          case "fishes":
            setSelectedAnimal("fishes");
            navigate(`/Collections?animal=fishes`);
            break;
        }
      }, 1000);
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      if (isSearchOpen) {
        handleSearchSubmit();
      } else {
        toggleSearch();
      }
    }
  };

  const renderpage = () => {
    switch (currentPage) {
      case "LandingPath":
        return <LandingPath />;
      case "AboutUs":
        return <AboutUs />;
      case "Collections":
        return (
          <Collections
            selectedAnimal={selectedAnimal}
            setSelectedAnimal={setSelectedAnimal}
          />
        );
      case "Gallery":
        return <Gallery />;
      default:
        return null;
    }
  };
  const handleLoginLogout = () => {
    if (props.status === "loggedin") {
      props.update("logout");
      setSelectedAccountOption(null);
      navigate("/");
    } else {
      props.update("login");
    }
  };

  return (
    <div>
      <div className="mainheading">
        <div className="Round">
          <img
            className="animal"
            src={Petimage}
            alt="Pet"
            width="25px"
            height="20px"
          ></img>
        </div>
        <div className="Home">
          <Link
            to="/LandingPath"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h4>Home</h4>
          </Link>
        </div>
        <div className="AboutUs">
          <Link
            to="/AboutUs"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h4>About Us</h4>
          </Link>
        </div>
        <div className="Collections">
          <Link
            to="/Collections"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h4>Collections</h4>
          </Link>
        </div>
        <div className="Gallery">
          <Link
            to="/Gallery"
            style={{ color: "white", textDecoration: "none" }}
          >
            <h4>Gallery</h4>
          </Link>
        </div>
        <div className="SearchandCart">
          <div className="search-container">
            {isSearchOpen ? (
              <input
                type="text"
                placeholder="Search"
                className="search-input-field"
                onKeyPress={handleEnterKey}
                value={searchValue}
                onChange={handleSearchInputChange}
              />
            ) : (
              <BsSearch
                size="1.5rem"
                color="white"
                className="Search"
                onClick={toggleSearch}
              />
            )}
          </div>
          <Link to="/Cart">
            <BsFillCartFill size="1.5rem" color="white" className="Cart" />
          </Link>
        </div>
        <form>
          <div>
            {props.status === "Logout" ? (
              <Link to="/">
                <Button
                  value="Login"
                  colors="btnlightgrey pad_rect"
                  onClick={handleLoginLogout}
                ></Button>
              </Link>
            ) : (
              <LoginDropDown update = {props.update} />
            )}
          </div>
        </form>
      </div>
      <div>{renderpage()}</div>
    </div>
  );
};
export default Header;
