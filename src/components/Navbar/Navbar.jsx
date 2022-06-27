import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { BiMoviePlay } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import "./style.scss";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="mainContainer">
      <div className="leftContainer">
        <div
          className="logoContainer"
          onClick={() => {
            navigate("/");
          }}
        >
          movies world <BiMoviePlay />
        </div>
      </div>
      <div className="centerContainer">
        <div className="languageButton">EN</div>
        <div className="searchContainer">
          <input className="searchInput" type="text" placeholder="Search" />
          <BsSearch className="searchIcon" />
        </div>
      </div>
      <div className="rightContainer">
        <div
          className="registerButton"
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </div>
        <div
          className="signinButton"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign in
        </div>
        <div className="shoppingCartContainer">
          <MdOutlineShoppingCart size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
