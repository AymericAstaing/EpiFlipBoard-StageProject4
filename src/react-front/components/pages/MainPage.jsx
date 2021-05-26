import React, { Component } from 'react';

import MainPageHelloContainer from '../micro-components/MainPageHelloContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, NavDropdown, FormControl , Button } from 'react-bootstrap';
import MainArticleGrid from '../micro-components/MainArticleGrid';

export default class MainPage extends Component {

  constructor(props) {
    super(props)
    //alert(props.user);
  }

  render() {
    return (
        <div>
            <MainPageHelloContainer user={this.props.user}/>
            <MainArticleGrid goToTopic={this.props.goToTopic}/>
        </div>
    )
  }
}