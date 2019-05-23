import { HashRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Login from './../Login/Login';
import Meetings from './../Meetings/Meetings';
import Estimate from './../Estimate/Estimate';

export default function App() {
  
  return (
    <Router>
      <Route exact path="/" component={Login}/>
      <Route path="/meetings/" component={Meetings} />
      <Route path="/estimate/" component={Estimate} />
    </Router>
  );
}
