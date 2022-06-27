import React from "react";

import "./style.scss";

const Register = () => {
  return (
    <div className="containerRegister">
      <div className="wrapperRegister">
        <h1 className="titleRegister">Create an account</h1>
        <form className="formRegister">
          <input className="inputRegister" placeholder="name"></input>
          <input className="inputRegister" placeholder="last name"></input>
          <input className="inputRegister" placeholder="username"></input>
          <input className="inputRegister" placeholder="email"></input>
          <input className="inputRegister" placeholder="password"></input>
          <input
            className="inputRegister"
            placeholder="confirm password"
          ></input>
          <h2 className="agreementRegister">
            By creating an account, I accept that my personal data will be
            processed in accordance to the PRIVACY POLICY
          </h2>
          <button className="buttonRegister">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
