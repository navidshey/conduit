import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './component/Home'
import { Whoops404 } from './component/Whoops404'

const routes = (
    <Router >
        <div>
            <Route path="/" component={Home} />
            <Route path="*" component={Whoops404} />
        </div>
    </Router>
)

export default routes