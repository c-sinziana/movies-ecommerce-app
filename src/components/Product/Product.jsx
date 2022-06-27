import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { hover } from "@testing-library/user-event/dist/hover";

import "./style.scss";

const Product = ({ item }) => {
  return (
    <div className="containerProduct">
      <div className="circleProduct" />
      <img className="imgElementProduct" src={item.img} />
      <div className="infoContainerProduct">
        <div className="iconReactionProduct">
          <MdOutlineShoppingCart className="iconSymbolProduct" />
        </div>
        <div className="iconReactionProduct">
          <BsSearch className="iconSymbolProduct" />
        </div>
        <div className="iconReactionProduct">
          <FaHeart className="iconSymbolProduct" />
        </div>
      </div>
    </div>
  );
};

export default Product;
