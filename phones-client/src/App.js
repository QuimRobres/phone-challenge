import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import PhoneDetail from "./components/PhoneDetail/PhoneDetail"

// Pages
import Home from './pages/Home/Home';

// Components

class App extends Component {
  render() {
    return (
      <div className="container">

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={PhoneDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
