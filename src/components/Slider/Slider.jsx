import React, { useState, useReducer } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

import { sliderItems } from "../../data";

import "./style.scss";

const Slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
      forceUpdate();
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      forceUpdate();
    }
  };

  return (
    <div className="mainContainer">
      <div className="movieContainer">
        <BiLeftArrow
          className="leftArrowButton"
          onClick={() => handleClick("left")}
        />
        <div className="slideContainer" key={sliderItems[slideIndex].id}>
          <div className="imgContainer">
            <img
              className="imgElement"
              src={sliderItems[slideIndex].img}
              alt=""
            />
          </div>
        </div>
        <BiRightArrow
          className="rightArrowButton"
          style={{
            ...{
              direction: props.direction === "right" ? "right" : "left",
            },
          }}
          onClick={() => handleClick("right")}
        />
      </div>
      <div className="infoContainer">
        <div className="titleContainer">{sliderItems[slideIndex].title}</div>
        <div className="descriptionContainer">
          {sliderItems[slideIndex].desc}
        </div>
      </div>
    </div>
  );
};

export default Slider;
