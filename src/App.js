import React from 'react';
import { Login } from './components/Login';
import Rooms from './components/Rooms';

function App() {
  return (
    <div className="uk-position-center">
      <h1>Planning Poker</h1>
      <Login/>
      <h1>Rooms</h1>
      <Rooms rooms={['A', 'B', 'C']}/>
    </div>
  );
}

export default App;
