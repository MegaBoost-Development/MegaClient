import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import { Router, hashHistory as history } from 'react-router';
import routes from './../routes';
import './styles/global.scss';
import Home from './components/Home/Home.js';

class App extends PureComponent {
	render() {
		return (
            <Home />
        );
	}
};

ReactDom.render(
	<Router routes={routes} history={history} />,
	document.getElementById('react-root')
);
