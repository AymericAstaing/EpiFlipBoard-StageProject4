import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Fire from '../config/Fire';
import "../css/SignIn.css"

class SignIn extends Component {
	constructor() {
			super();
			this.state = {
					email: '',
					password: ''
			};
			this.handleChange = this.handleChange.bind(this);
			this.SignIn = this.SignIn.bind(this);
	}
	
	handleChange(e) {
			let target = e.target;
			let value = target.type === 'checkbox' ? target.checked : target.value;
			let name = target.name;
			this.setState({
				[name]: value
			});
		}

	SignIn(e) {
		e.preventDefault();


		Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
		}).catch((error) => {
			console.log(error);
			alert(error.message);
		});
		console.log('The form was submitted with the following data:', this.state);
	}

	render() {
			return (
			<div className="FormCenter">
					<form className="FormFields" onSubmit={this.SignIn}>
					<div className="FormField">
							<label className="FormField__Label" htmlFor="email">E-Mail Address</label>
							<input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
						</div>

						<div className="FormField">
							<label className="FormField__Label" htmlFor="password">Password</label>
							<input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
						</div>

						<div className="FormField">
								<button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
						</div>
					</form>
				</div>
			);
	}
}

export default SignIn;
