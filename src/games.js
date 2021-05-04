import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import './styles/global.scss';
import Games from './components/Games/Games.js';

class App extends PureComponent {
	render() {
		return (
            <Games />
        );
	}
};

//ReactDom.render(<App/>, document.getElementById('react-games'));
