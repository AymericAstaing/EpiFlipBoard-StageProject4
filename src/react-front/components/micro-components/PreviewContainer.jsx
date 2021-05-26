import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Image, FormControl , Button, Nav, Navbar, Form} from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class PreviewContainer extends Component {

  render() {
    return (
        <Container className="text-center" style={{height: 18 + 'em', width: 35 + 'em', marginTop: 1 + 'em'}}>
            <Image src="https://source.unsplash.com/random" style={{resizeMode: 'contain', flex: 1, width: 100 + 'em', height: 18 + 'em'}} fluid/>
            <Typography style={{textAlign: "justify", marginTop: 1 + 'em',  marginLeft: "0%", marginTop: "2%", fontWeight: "bold", color: "black", fontSize: 20}}>
            Coronavirus : la France a-t-elle vraiment "la capacité" de réaliser 700 000 tests par semaine, comme l'affirme Emmanuel Macron ?
            </Typography>
            <Typography className="text-left" style={{marginTop: 0.4 + 'em', textAlign: "justify", color: "#444444", fontSize: 14}}>
            francetvinfo.fr - Benoît Zagdoun
            </Typography>
            <Typography style={{marginTop: 0.4 + 'em', textAlign: "justify", color: "black", fontSize: 16}}>
            Le plan était le suivant. Le déconfinement devait s'accompagner d'une campagne massive de dépistage de la population, afin de s'assurer que …
            </Typography>
            <Button variant="outline-secondary" style={{marginTop: 3 + 'em', color: "#444444"}}>Voir sur francetvinfo.fr</Button>
            <Nav className="d-flex justify-content-end" style={{marginTop: 1.5 + 'em'}}>
            <Container className="d-flex justify-content-start">
              <Typography style={{marginTop: "3%", marginLeft: -1.7 + 'em', color: "#9999a9", fontSize: 18}}>
                8 heures Plus tôt
              </Typography>
            </Container>
            <Button variant="link">
                              <img
                                alt=""
                                src="/res/share.png"
                                width="20"
                                height="20"
                                className="d-inline-block align-center"
                              />
                            </Button>
                            <Button variant="link">
                              <img
                                alt=""
                                src="/res/likeOff.png"
                                width="20"
                                height="20"
                                className="d-inline-block align-center"
                              />
                            </Button>
                            <Button variant="link">
                              <img
                                alt=""
                                src="/res/more.png"
                                width="20"
                                height="20"
                                className="d-inline-block align-center"
                              />
                            </Button>
            </Nav>
            <Container className="d-flex justify-content-center">
              <Divider style={{width: 57 + 'em', marginTop: "20%", marginLeft: "3%",  marginRight: "3%", marginBottom: "10%"}}/>
            </Container>
        </Container>
    )
  }
}