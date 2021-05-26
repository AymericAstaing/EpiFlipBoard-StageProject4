import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Form, NavDropdown, FormControl , Button } from 'react-bootstrap';

export default class EfbHeader extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  render() {
    return(
      <div>
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
          <Navbar.Brand href="#home">
            <img
              onClick={this.props.goToMain}
              alt=""
              src="/res/logo.png"
              width="214.04138"
              height="34.456"
              style={{marginTop: 0.15 + 'em', marginBottom: 0.15 + 'em'}}
              className="d-inline-bloc  k align-center"
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Form inline>
                  <FormControl type="text" placeholder="Search into EpiFlipBoard" className="mr-sm-2" />
                  <Button variant="link">
                  <img
                    alt=""
                    src="/res/search.png"
                    width="30"
                    height="30"
                    style={{marginRight: 0.3 + 'em'}}
                    className="d-inline-block align-center"
                  />
                  </Button>
                </Form>
                {this.props.user ? (<div></div>) : (<div><Button variant="danger" href="#topic" style={{marginLeft: 1 + 'em', marginRight: 1 + 'em'}}>Register</Button><Button variant="outline-danger">Log-in</Button></div>)}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Divider/>
      </div>
    )
  }
}