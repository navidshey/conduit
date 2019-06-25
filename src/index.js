import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../src/App'

import 'babel-polyfill';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadArticles} from './action/articleActions';
import {loadTags} from './action/tagActions';

window.React = React
const store = configureStore();
store.dispatch(loadArticles());
store.dispatch(loadTags());

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
			<Route path="/" component={App} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('react-container'));


// window.React = React

// ReactDOM.render(
// 	<Router>
// 		<Switch>
// 			<Route path="/" component={App} />
// 		</Switch>
// 	</Router>,
// 	document.getElementById('react-container'))
