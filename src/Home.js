import React from "react";
import "./css/Home.css";
import Fire from "./config/Fire";
import {writeOpenData, getOpenData, writeUserData, getUserData, writeDefaultUserData} from "./back/Db"
import {getNewsData} from "./back/News"
import {InputLabel, Select, MenuItem, FormHelperText, FormControl} from '@material-ui/core';


class Home extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div className="App_Home row">
			</div>
		);
	}
}

export default Home;


// {Object.keys(this.state.news).map((obj, i) => (

