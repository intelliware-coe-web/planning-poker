import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <h1>Planning Poker</h1>
      <form>
        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <span className="uk-form-icon" data-uk-icon="icon: mail"/>
            <input className="uk-input" type="text"/>
          </div>
        </div>

        <div className="uk-margin">
          <div className="uk-inline uk-width-1-1">
            <span className="uk-form-icon" data-uk-icon="icon: lock"/>
            <input className="uk-input" type="password"/>
          </div>
        </div>

        <div className="uk-margin">
          <Link to="/rooms/" className="uk-button uk-button-primary uk-width-1-1">Login</Link>
        </div>
      </form>
    </>
  );
}
