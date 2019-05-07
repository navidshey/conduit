import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import Article from './component/Article'
import { Whoops404 } from './component/Whoops404'

const routes = (
    <Router >
        <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul> 
        </nav> */}

            <Route exact path="/" component={Home} />
            <Route path="/article/:id" component={Article} />
            <Route path="*" component={Whoops404} />
        </div>  
    </Router>
)

export default routes