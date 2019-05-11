import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './component/Home';
import Article from './component/Article';
import Navbar from './component/NavBar';
import Login from './component/Login';
import Register from './component/Register'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar></Navbar>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/article/:id" component={Article} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
