import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Main from './components/main/main';
import Piano from './components/Piano/piano';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/piano" component={Piano} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
