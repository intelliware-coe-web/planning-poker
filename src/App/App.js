import {Route} from "react-router-dom";
import React from 'react';
import Host from '../Host/Host'
import Meetings from '../Meetings/Components/Meetings/Meetings';
import Estimate from '../Estimate/Components/Estimate';
import CreateMeeting from '../Meetings/Components/CreateMeeting/CreateMeeting';
import CreateUser from '../User/Components/CreateUser';
import AddStory from '../Stories/Components/AddStory/AddStory';
import Story from '../Stories/Components/Story/Story';
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
          <Route path="/stories/add" component={AddStory} />
          <Route path="/story/:storyId" component={Story} />
      </ConnectedRouter>
  );
}
