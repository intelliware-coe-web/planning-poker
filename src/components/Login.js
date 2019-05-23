import React from 'react';
import { Link } from "react-router-dom";
import './Login.css';

function Login() {
  return (
    <div className="login">
      <div className="login-form-container">
        <div className="uk-align-center login-form">
        <span uk-icon="icon: users; ratio: 5" className="uk-margin"></span>
        <form>
          <fieldset className="uk-fieldset">
            <div className="uk-margin">
              <div className="uk-inline">
                <span className="uk-form-icon" uk-icon="icon: user"></span><input className="uk-input" type="text" placeholder="Username"></input>
              </div>
            </div>
            <div className="uk-margin">
              <div className="uk-inline">    
                <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                <input className="uk-input" type="text" placeholder="Password"></input>
              </div>
            </div>
          </fieldset>
          <div className="uk-inline">
            <Link to="/room">
              <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">
                Login
              </button>
            </Link>
          </div>
        </form>
        </div>
      </div>
     </div>
  );
}

export default Login;