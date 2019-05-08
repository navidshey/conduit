// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react'
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import Article from './component/Article'
import { Whoops404 } from './component/Whoops404'
import Navbar from './component/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
