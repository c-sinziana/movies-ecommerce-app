import React from "react";

import "./style.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className="containerCategoryItem">
      <img className="imgElementCategoryItem" src={item.img} />
      <div className="infoContainerCategoryItem">
        <div className="titleContainerCategoryItem">{item.title}</div>
        <button className="buttonContainerCategoryItem">Watch now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
