import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import Article from './component/Article'
// import { Whoops404 } from './component/Whoops404'
// import MasterPage from './component/masterPage';

const routes = (
  <Router >
    <div>
      {/* <Route path="/" component={Home} />
      <Route path="/" component={MasterPage}>
        <Route path="/article/:id" component={Article} />
      </Route>
      <Route path="*" component={Whoops404} /> */}

      <Route exact path="/" component={Home} />
      <Route path="/article/:id" component={Article} />
    </div>
  </Router>
)

export default routes