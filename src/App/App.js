import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Login from './../Login/Login';
import Rooms from './../Rooms/Rooms';

export default function App() {
  
  return (
    <Router>
      <Route exact path="/" component={Login}/>
      <Route path="/rooms" component={Rooms} />
    </Router>
  );
}
