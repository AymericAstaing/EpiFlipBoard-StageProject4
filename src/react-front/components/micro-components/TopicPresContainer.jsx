import React, { Component, View} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Image, FormControl , Button, Nav, Navbar, Form} from 'react-bootstrap';
import { Divider } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TopicPresContainer extends Component {

  render() {
    return (
        <Container className="text-center" >
            <Image src="https://source.unsplash.com/random" resizeMode={'contain'} style={{flex: 1, height: 24.5 + 'em', width: 72 + 'em'}} fluid/>
            <Typography className="text-left" style={{marginLeft: "3%", marginTop: "2%", fontWeight: "bold", color: "black", fontSize: 30}}>
                MAINTENANT VOUS SAVEZ
            </Typography>
            <Typography className="text-left" style={{textAlign: "justify", marginLeft: "3%", color: "black", fontSize: 13, width: 40 + 'em'}}>
            Vous connaissez, mais est-ce que vous savez? En moins de 3 minutes, nous vous donnons les clés essentielles pour savoir vraiment ce qui se cache derrière les mots, sigles, concepts qui font notre actualité. Après, vous pourrez dire que vous savez.
            </Typography>
            <Nav className="ml-auto">
              <Image className="text-left" src="https://source.unsplash.com/random" style={{marginTop: "1%", marginLeft: "3%", width: 2.5 + 'em', height: 2.5 + 'em'}} roundedCircle/>
              <Typography className="text-left" style={{textAlign: "justify", marginLeft: "1%", marginTop: "1.7%", color: "black", color: "#444444", fontSize: 15}}>
              Par Bababam
            </Typography>
            </Nav>
            <Nav style={{marginLeft: "3%", marginTop: "1.7%"}}>
              <Button variant="outline-danger">Suivre</Button>
              <Button variant="outline-danger" style={{marginLeft: "1.5%"}}>Ajouter aux favoris</Button>
              <Button variant="outline-secondary" style={{marginLeft: "1.5%"}}>Partager</Button>
              <Button variant="outline-secondary" style={{marginLeft: "1.5%"}}>Ajout</Button>
            </Nav>
            <Typography className="text-left" style={{textAlign: "justify", marginTop: "3%", marginLeft: "3%", color: "black", fontSize: 18, width: 40 + 'em'}}>
            4 451 Lecteurs | 52 561 Flips de page | 847 Abonnés | 215 Articles
            </Typography>
            <Divider style={{marginTop: "2%", marginLeft: "3%",  marginRight: "3%", marginBottom: "10%"}}/>
        </Container>
    )
  }

}