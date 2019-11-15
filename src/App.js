import React from 'react';
import Main from './components/main/main';
import Piano from './components/Piano/piano';
// import './app.scss'

// route
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
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

export default App;
