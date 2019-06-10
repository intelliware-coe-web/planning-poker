import {Route} from "react-router-dom";
import React from 'react';
import Meetings from '../Meetings/Components/Meetings/Meetings';
import Stories from '../Stories/Components/Stories/Stories';
import Estimate from '../Estimate/Components/Estimate';
import CreateMeeting from '../Meetings/Components/CreateMeeting/CreateMeeting';
import CreateUser from '../User/Components/CreateUser';
import CreateStory from '../Stories/Components/CreateStory/CreateStory';
import Story from '../Stories/Components/Story/Story';
import {history} from "../store";
import {ConnectedRouter} from "connected-react-router";

export default function App() {

  return (
      <ConnectedRouter history={history}>
          <Route exact path="/" component={CreateUser}/>
          <Route path="/stories/" component={Stories} />
          <Route path="/meetings/" component={Meetings} />
          <Route path="/meeting/create" component={CreateMeeting} />
          <Route path="/estimate/:meetingId" component={Estimate} />
          <Route path="/stories/create" component={CreateStory} />
          <Route path="/story/:storyId" component={Story} />
      </ConnectedRouter>
  );
}
