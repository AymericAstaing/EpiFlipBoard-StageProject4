import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import fire from '../config/Fire';
import firebase from "firebase"
import SignUp from './SignUp';
import SignIn from './SignIn';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import "../css/Login.css"

class Login extends Component {


	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
		this.signup = this.signup.bind(this);
		this.database = fire.database().ref().child('users')
		this.state = {
			isSignedIn: false,
			email: '',
			password: ''
		};
	}

	uiConfig = {
		signInFlow: "popup",
		signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID],
		callbacks: {
			signInSuccess: () => false
		}
	}

	componentDidMount(){
		this.database.on('value', function(datasnapshot){
			console.log("le snapshot: ", datasnapshot)
		})
		firebase.auth().onAuthStateChanged(user => {
			this.setState({ isSignedIn: !!user })
			console.log("user", user)
		})	}

	login() {
		// e.preventDefault();
		fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
		}).catch((error) => {
			console.log(error);
		});
	}

	loginGoole() {
		// e.preventDefault();
		fire.auth().auth.signInWithPopup(fire.auth().GoogleAuthProvider).then((u)=>{
		}).catch((error) => {
			console.log(error);
		});
	}

	signup(e){
		e.preventDefault();
		fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
		}).then((u)=>{console.log(u)})
		.catch((error) => {
			console.log(error);
		})
	}
	render() {
		return (
				<Router basename="/">
				<div className="App_Login">
					<div className="App__Form">
						<div className="FormTitle">
							<NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
						</div>
						<StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
						<Route exact path="/" component={SignUp}></Route>
						<Route path="/sign-in" component={SignIn}></Route>
					</div>
					<div className="App__Aside">
						<div className="PageSwitcher">
							<NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
							<NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
						</div>
					</div>
				</div>
			</Router>
		);
	}
}

export default Login;