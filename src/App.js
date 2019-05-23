import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./pages/Login"
import Rooms from "./pages/Rooms";

function App() {
    return (
        <Router>
            <div className="app">

                <div className="component-wrapper">
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/rooms" component={Rooms} />
                </div>

            </div>
        </Router>
    );
}

export default App;
