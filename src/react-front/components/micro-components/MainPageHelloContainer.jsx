import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { Button } from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class MainPageHelloContainer extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return (
        <Container className="text-center" style={{width: 50 + 'em'}}>
            <p style={{marginTop: 1 + 'em', fontSize: 55, fontWeight: "bold", color: "black"}}>STAY TUNNED,<br></br>
            FIND INSPIRATION!
            </p>
            <Divider style={{backgroundColor: "red",  marginTop: -1 + 'em', marginRight: 7 + 'em',  marginLeft: 7 + 'em', height: 0.7 + 'em'}}/>
            <p style={{marginTop: 1 + 'em', fontSize: 25, color: "black"}}>Selected stories for you.
            </p>
            {this.props.user ? (<div></div>) : (<div><Button variant="danger" style={{fontSize: 18, fontWeight: "bold", marginTop: 2 + 'em', marginBottom: 3 + 'em', paddingTop: 0.8 + 'em', paddingBottom: 0.8 + 'em',
            paddingLeft: 2 + 'em', paddingRight: 2 + 'em'}}>Créer un compte</Button></div>)}
        </Container>
    )
  }

}