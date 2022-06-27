import React from "react";

import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";

import "./style.scss";

const Categories = () => {
  return (
    <div className="containerCategories">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
