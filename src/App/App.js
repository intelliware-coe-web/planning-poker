import {Route} from "react-router-dom";
import React from 'react';
import Meetings from '../Meetings/Components/Meetings/Meetings';
import Stories from '../Stories/Components/Stories/Stories';
import StoryEstimate from '../StoryEstimate/Components/StoryEstimate';
import CreateMeeting from '../Meetings/Components/CreateMeeting/CreateMeeting';
import CreateUser from '../User/Components/CreateUser';
import CreateStory from '../Stories/Components/CreateStory/CreateStory';
import StorySummary from '../Stories/Components/StorySummary/StorySummary';
import {history} from "../store";
import {ConnectedRouter} from "connected-react-router";

export default function App() {

  return (
      <ConnectedRouter history={history}>
          <Route exact path="/" component={CreateUser}/>
          <Route path="/meetings/" component={Meetings} />
          <Route path="/meeting/create/" component={CreateMeeting} />
          <Route path="/meeting/:meetingId/estimate/" component={StoryEstimate} />
          <Route path="/meeting/:meetingId/stories/" component={Stories} />
          <Route path="/story/create/" component={CreateStory} />
          <Route path="/meeting/:meetingId/story/:storyId/summary/" component={StorySummary} />
      </ConnectedRouter>
  );
}
