import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";
import { BsPinMapFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";

import "./style.scss";

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="leftContainerFooter">
        <h1>movies world</h1>
        <p className="descriptionFooter">
          We are preparing the best movies for you and your delight, just so you
          can spend amazing evenings with your significant other, watching the
          greatest productions of all times.
        </p>
        <div className="socialContainerFooter">
          <div className="socialIconFooter">
            <BsFacebook style={{ color: "#4107f0" }} />
          </div>
          <div className="socialIconFooter">
            <BsInstagram style={{ color: "#de12a4" }} />
          </div>
          <div className="socialIconFooter">
            <BsTwitter style={{ color: "#4f79c2" }} />
          </div>
          <div className="socialIconFooter">
            <BsReddit style={{ color: "#a1102d" }} />
          </div>
        </div>
      </div>
      <div className="centerContainerFooter">
        <h3 className="titleLinksFooter">links for you</h3>
        <ul className="listLinksFooter">
          <li className="listItemFooter">Home</li>
          <li className="listItemFooter">Shopping Cart</li>
          <li className="listItemFooter">Horror movies</li>
          <li className="listItemFooter">Love movies</li>
          <li className="listItemFooter">Comedy movies</li>
          <li className="listItemFooter">Wishlist</li>
          <li className="listItemFooter">Watch later</li>
        </ul>
      </div>
      <div className="rightContainerFooter">
        <div className="titleRightContainerFooter">
          <p className="contactItemFooter">
            <BsPinMapFill style={{ marginRight: "0.5rem" }} />
            Queens street, no.2, Cornwall district
          </p>
          <p className="contactItemFooter">
            <FiPhoneCall style={{ marginRight: "0.5rem" }} /> + 0384 582 943 985
          </p>
          <p className="contactItemFooter">
            <FiMail style={{ marginRight: "0.5rem" }} /> contact@moviesworld.com
          </p>
          <img
            className="paymentFooter"
            src="https://www.pngitem.com/pimgs/m/47-479964_accepted-payment-types-payment-types-hd-png-download.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
