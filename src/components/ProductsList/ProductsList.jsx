import React from "react";
import { popularProducts } from "../../data";
import Product from "../Product/Product";

import "./style.scss";

const ProductsList = ({ item }) => {
  return (
    <div className="titleProducts">
      <h1>Available movies:</h1>
      <div className="containerProducts">
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
