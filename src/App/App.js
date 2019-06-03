import {Route} from "react-router-dom";
import React from 'react';
import Host from '../Host/Host'
import Meetings from '../Meetings/Components/Meetings/Meetings';
import Estimate from '../Estimate/Estimate';
import CreateMeeting from '../Meetings/Components/CreateMeeting/CreateMeeting';
import CreateUser from '../User/Components/CreateUser';
import Ticket from '../Ticket/Ticket';
import Story from '../Story/Story';
import {history} from "../store";
import {ConnectedRouter} from "connected-react-router";

export default function App() {

  return (
      <ConnectedRouter history={history}>
          <Route exact path="/" component={CreateUser}/>
          <Route path="/host" component={Host} />
          <Route path="/meetings/" component={Meetings} />
          <Route path="/meeting/create" component={CreateMeeting} />
          <Route path="/estimate/" component={Estimate} />
          <Route path="/ticket/" component={Ticket} />
          <Route path="/story/:storyId" component={Story} />
      </ConnectedRouter>
  );
}
