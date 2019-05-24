import { HashRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Host from './../Host/Host'
import Meetings from './../Meetings/Meetings';
import Estimate from './../Estimate/Estimate';
import CreateUser from "../User/CreateUser";

export default function App() {
  
  return (
    <Router>
      <Route exact path="/" component={CreateUser}/>
      <Route path="/host" component={Host} />
      <Route path="/meetings/" component={Meetings} />
      <Route path="/estimate/" component={Estimate} />
    </Router>
  );
}
