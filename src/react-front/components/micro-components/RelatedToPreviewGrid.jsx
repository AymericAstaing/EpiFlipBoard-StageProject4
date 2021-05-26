import React, { Component, View} from 'react';
import Card from '@material-ui/core/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Image } from 'react-bootstrap';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import getNewsData from '../../../back/News.js'
import { Nav } from 'react-bootstrap';

export default class RelatedToPreviewGrid extends Component {

  render() {

    const cards = [1, 2, 3, 4, 5];

    const useStyles = makeStyles((theme) => ({
      icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        radius: "0%",
        flexDirection: 'line',
      },
      cardMedia: {
        height: '80%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
    }));

    return (
      <div>
        <Container className="text-center" maxWidth='lg' style={{ height: 18 + 'em', marginTop: 32 + 'em', marginBottom: 5 + 'em'}}>
            <Typography style={{textAlign: "justify", marginTop: 10 + 'em',  marginLeft: "2%", fontWeight: "bold", color: "black", fontSize: 20}}>
                RELATED STORIES
            </Typography>
            <Container style={{ marginTop: 2 + 'em'}} maxWidth='lg' className={useStyles.cardGrid}>
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <div style={{ display: 'flex', width: 20 + 'em'}}>
                      <Image className="text-left" src="https://source.unsplash.com/random" resizeMode="contain" style={{width: 7 + 'em', height: 7 + 'em'}} fluid/>
                      <div style={{ display: 'flex', flexDirection: 'column'}}>
                        <Typography style={{ fontSize: 15, textAlign: "justify", marginLeft: 0.5 + 'em',  marginTop: -0.2 + 'em', color: "black"}}>
                          "The Voice" : Sidoine, le finaliste de Jenifer, fait appel au public pour financer son premier album
                        </Typography>
                        <Typography style={{ fontSize: 12,  verticalAlign: 'bottom', textAlign: "justify", marginLeft: 0.5 + 'em',  marginTop: -0.2 + 'em', color: "#444444"}}>
                        usbeketrica.com
                        </Typography>
                      </div>
                  </div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Container>
      </div>
    )
  }
}