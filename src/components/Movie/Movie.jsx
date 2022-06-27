import React from "react";

import Announcement from "../Announcement/Announcement";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar.jsx";
import Newsletter from "../Newsletter/Newsletter";

import "./style.scss";

const Movie = () => {
  return (
    <div className="container">
      <Navbar />
      <Announcement />

      <div className="wrapper">
        <div className="imgContainer">
          <img
            className="img"
            src="https://cdn.gizmostory.com/wp-content/uploads/2021/07/Pirates-of-The-Caribbean-6-Reboot.jpg"
          ></img>
        </div>
        <div className="infoContainer">
          <div className="title">
            Pirates of the Carribean
            <p className="desc">
              The Pirates of the Caribbean is an adventure movie that will keep
              you on the edge of your seat! You are about to follow captain
              Jack's adventures over the seas, you are about to laugh at his
              witty jokes and enjoy a break from your daily chores!
            </p>
            <filter className="filterAction">
              Choose further action:
              <select className="select">
                <option> Order movie</option>
                <option> Download movie</option>
                <option> Watch online</option>
              </select>
              <div className="addContainer">
                <div className="amountContainer">
                  <div>-</div>
                  <div className="amount">1</div>
                  <div>+</div>
                </div>
                <button id="addtocart" className="button">
                  Add to cart
                </button>
              </div>
            </filter>
          </div>
        </div>
      </div>
      <p className="price"> 10$</p>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Movie;
