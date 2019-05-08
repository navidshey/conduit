import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../src/App'


window.React = React

ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/" component={App} />
		</Switch>
	</Router>,
	document.getElementById('react-container'))
