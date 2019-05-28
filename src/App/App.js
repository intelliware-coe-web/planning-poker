import { HashRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Host from './../Host/Host'
import Meetings from './../Meetings/Meetings';
import Estimate from './../Estimate/Estimate';
import AddMeeting from '../Meetings/AddMeeting';
import CreateUser from '../User/CreateUser';
import Ticket from '../Ticket/Ticket';
import Story from '../Story/Story';

export default function App() {
  
  return (
    <Router>
      <Route exact path="/" component={CreateUser}/>
      <Route path="/host" component={Host} />
      <Route path="/meetings/" component={Meetings} />
      <Route path="/meetings/add" component={AddMeeting} />
      <Route path="/estimate/" component={Estimate} />
      <Route path="/ticket/" component={Ticket} />
      <Route path="/story/" component={Story} />
    </Router>
  );
}
