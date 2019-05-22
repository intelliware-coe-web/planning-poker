import React from 'react';
import { Login } from './components/Login';
import Rooms from './components/Rooms';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="uk-position-center">
      <Router>
        <Route exact path="/" component={Login}/>
        <Route path="/rooms/" component={Rooms}/>
      </Router>
    </div>
  );
}

export default App;
