import React from 'react';
import Login from './Login/Login';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Rooms from './Rooms/Rooms';

export default class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Route exact path="/" component={Login}/>
        <Route path="/rooms" component={Rooms} />
      </Router>
    );
  }   
}
