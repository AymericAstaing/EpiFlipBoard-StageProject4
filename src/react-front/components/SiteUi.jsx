import React, { Component, useState } from 'react';

import MainPage from './pages/MainPage';
import TopicPage from './pages/TopicPage';
import PreviewPage from './pages/PreviewPage'
import EfbHeader from './micro-components/EfbHeader';
import Login from '../../connection/Login';
import Fire from '../../config/Fire';
import UserPage from "./pages/UserPage"
import { Checkbox, Button } from '@material-ui/core';

const views = {
    MAIN: <MainPage/>,
    TOPIC: <TopicPage/>,
    PREVIEW: <PreviewPage/>,
    PROFIL: <UserPage/>
}

export default class SiteUi extends Component {

    constructor() {
        super()
        this.state = ({
            user: null,
            displayState: 'PREVIEW',
		});
		this.authListener = this.authListener.bind(this);
        this.database = Fire.database().ref().child('email')

        this.goToTopic = this.goToTopic.bind(this)
        this.goToPreview = this.goToPreview.bind(this)
        this.goToMain = this.goToMain.bind(this)
    }

    componentDidMount() {
		console.log("database: ", this.database)
		this.authListener();
		this.database.on('value', snap => console.log("le snapshot: ", snap.val()));
	}

	authListener() {
		Fire.auth().onAuthStateChanged((user) => {
			console.log("user is : ",user);
			if (user) {
				this.setState({ user });
				localStorage.setItem('user', user.uid);
			} else {
				this.setState({ user: null });
				localStorage.removeItem('user');
			}
		});
	}

    changeDisplay(newDisplayState)
    {
        this.state.displayState = newDisplayState
    }

    goToTopic() {
        this.setState({
          displayState: 'TOPIC'
        })
    }

    goToPreview() {
        this.setState({
          displayState: 'PREVIEW'
        })
    }

    goToMain() {
        this.setState({
          displayState: 'MAIN'
        })
    }

    goToProfil() {
        this.setState({
          displayState: 'PROFIL'
        })
    }

    render() {


        const CurrentView = (state) => {
            var elem = views[state];
            return <elem.type user={this.state.user} goToMain={this.goToMain} goToTopic={this.goToTopic} goToPreview={this.goToPreview} goToProfil={this.goToProfil}/>;
        }

        const currentState = this.state.displayState;
        return (
            <div>
                {this.state.user ? (<div><EfbHeader user={this.state.user} goToMain={this.goToMain}/><Button onClick={() => this.goToProfil()} variant="link">
                  Profil </Button>  {CurrentView(currentState)} </div>) : (<Login/>)}
            </div>
        )
    }
}