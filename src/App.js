import React, { Component } from 'react';
import Home from './Home';
import Login from './connection/Login';
import SiteUi from './react-front/components/SiteUi';
import "./css/App.css";
import Fire from './config/Fire';

class App extends Component {

	render() {
		return (
			<SiteUi/>
		);
	}
}

export default App;