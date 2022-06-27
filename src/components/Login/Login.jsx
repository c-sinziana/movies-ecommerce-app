import React from "react";

import "./style.scss";

const Login = () => {
  return (
    <div className="containerLogin">
      <div className="wrapperLogin">
        <h1 className="titleLogin">Sign in</h1>
        <form className="formLogin">
          <input className="inputLogin" placeholder="email"></input>
          <input className="inputLogin" placeholder="password"></input>
          <button className="buttonLogin">Log in</button>
          <div className="descriptionLogin">
            Don't you remember your password?Reset it right here!
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
