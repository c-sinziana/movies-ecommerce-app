import React from "react";
import { AiOutlineSend } from "react-icons/ai";

import "./style.scss";

const Newsletter = () => {
  return (
    <div className="containerNewsletter">
      <div className="titleNewsletter">Newsletter</div>
      <div className="descriptionNewsletter">
        Get updates about your favourite movies!
      </div>
      <div className="inputContainerNewsletter">
        <input className="inputNewsletter" placeholder="your email" />
        <button className="buttonNewsletter">
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
