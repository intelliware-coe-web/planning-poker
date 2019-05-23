import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Login';
import Room from './Room';

function Router() {
  return (
    <BrowserRouter>
        <Route path="/login" component={Login} />
        <Route path="/" exact component={Login} />
        <Route path="/room/" component={Room} />
        {/* <Route path="/story/:id" component={Story} /> */}
    </BrowserRouter>
  );
}

export default Router;