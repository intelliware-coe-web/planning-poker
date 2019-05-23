import { HashRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Login from './../Login/Login';
import Rooms from './../Rooms/Rooms';
import Host from './../Host/Host'
import Meetings from './../Meetings/Meetings';

export default function App() {
  
  return (
    <Router>
      <Route exact path="/" component={Login}/>
      <Route path="/rooms" component={Rooms} />
      <Route path="/host" component={Host} />
      <Route path="/meetings/" component={Meetings} />
    </Router>
  );
}
