import React, { Component } from 'react'
import {BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Article from './component/Article';
import Navbar from './component/NavBar';
import Login from './component/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
