import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fire from '../config/Fire';
import "../css/SignUp.css";

class SignUp extends Component {
	constructor() {
		super();

		this.state = {
				email: '',
				password: '',
				username: '',
				can_create: false
		};

		this.database = Fire.database().ref().child('users');
		this.handleChange = this.handleChange.bind(this);
		this.signup = this.signup.bind(this);
	}

	handleChange(e) {
		let target = e.target;
		let value = target.value;
		let name = target.name;
		this.database = Fire.database().ref().child('users');
		this.setState({
			[name]: value
		});
	}

	signup(e) {
		e.preventDefault();
		let isok = 1

		if(this.state.username !== "" && this.state.email !== ""  && this.state.password !== ""){
			Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
			}).then((u)=>{console.log(u)})
			.catch((error) => {
				alert(error.message);
				isok = 0
			})
			console.log('The form was submitted with the following data:');
			if (isok === 1) {
				Fire.database().ref('users/new').set({
					username: this.state.username,
					email: this.state.email,
					password: this.state.password,
					image: "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg"
				  });	  
				this.database.push().set({
					username: this.state.username,
					email: this.state.email,
					password: this.state.password,
					image: "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg"
				})
			}
		}
		else {
			alert("Full Name or E-mail Adress or Password is empty")
		}
	}

	render() {
		return (
		<div className="FormCenter">
				<form onSubmit={this.handleSubmit} className="FormFields">
					<div className="FormField">
						<label className="FormField__Label" htmlFor="username">Full Name</label>
						<input type="text" id="username" className="FormField__Input" placeholder="Enter your full name" name="username" value={this.state.username} onChange={this.handleChange} />
					</div>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="email">E-Mail Address</label>
						<input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
					</div>
					<div className="FormField">
						<label className="FormField__Label" htmlFor="password">Password</label>
						<input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
					</div>

					<div className="FormField">
							<button className="FormField__Button mr-20" onClick={this.signup}>Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
