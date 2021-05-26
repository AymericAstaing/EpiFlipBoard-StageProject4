import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/MainPage.css';
import { Button } from 'react-bootstrap';
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

	  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	  const catNames = ["business", "entertainment", "general", "health", "science", "sports", "technology"];

      export default class MainArticleGrid extends Component {

        constructor(props) {
          super(props)
          this.state = {
        	  currentTheme: 2,
            news: {
			    	articles: []
			      }
          };
        }

        componentDidMount() {
          getNewsData.call(this, "general");
        }

        render () {

			function changeMainTheme(requiredTheme) {
        getNewsData.call(this, catNames[requiredTheme])
        this.setState({currentTheme: requiredTheme})
			}
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
              flexDirection: 'column',
            },
            cardMedia: {
              height: '80%', // 16:9
            },
            cardContent: {
              flexGrow: 1,
            },
          }));

          return (
            <React.Fragment>
              <main>
                <div>
                  <Nav class="d-flex justify-content-center" style={{marginTop: 7 + 'em'}}>
                      <Nav.Link onClick={changeMainTheme.bind(this, 0)} class="linkButton" style={{fontSize: 20, color: "#989898", fontWeight: "bold", marginLeft: 2 + 'em', marginRight: 2 + 'em'}} href="#home">BUSINESS</Nav.Link>
                      <Nav.Link onClick={changeMainTheme.bind(this, 1)} style={{fontSize: 20, color: "#989898", fontWeight: "bold", marginLeft: 2.0 + 'em', marginRight: 2.0 + 'em'}} href="#home">ENTERTAINMENT</Nav.Link>
                      <Nav.Link onClick={changeMainTheme.bind(this, 2)} style={{fontSize: 20, color: "#989898", fontWeight: "bold", marginLeft: 2.0 + 'em', marginRight: 2.0 + 'em'}} href="#home">GENERAL</Nav.Link>
                      <Nav.Link onClick={changeMainTheme.bind(this, 3)} style={{fontSize: 20, color: "#989898", fontWeight: "bold", marginLeft: 2.0 + 'em', marginRight: 2.0 + 'em'}} href="#home">HEALTH</Nav.Link>
                      <Nav.Link onClick={changeMainTheme.bind(this, 4)} style={{fontSize: 20, color: "#989898", fontWeight: "bold", marginLeft: 2.0 + 'em', marginRight: 2.0 + 'em'}} href="#home">SCIENCES</Nav.Link>
                      <Nav.Link onClick={changeMainTheme.bind(this, 5)} style={{fontSize: 20, color: "#989898", fontWeight: "bold", marginLeft: 2.0 + 'em', marginRight: 2.0 + 'em'}} href="#home">SPORT</Nav.Link>
                      <Nav.Link onClick={changeMainTheme.bind(this, 6)} style={{fontSize: 20, color: "#989898", fontWeight: "bold", marginLeft: 2.0 + 'em', marginRight: 2.0 + 'em'}} href="#home">TECHNOLOGY</Nav.Link>
                  </Nav>
                  <Divider class="d-flex justify-content-center" style={{width: 78 + 'em'}}/>
              </div>
                <Container className={useStyles.cardGrid} maxWidth='lg'>
                  <Grid container spacing={4}>
                    {console.log(this.state.news.articles[0])}
                    {this.state.news.articles.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                        <Container className={useStyles.card}  style={{ borderRadius: '0px', marginBottom:'15%'}}>
                          <Button onClick={this.props.goToTopic} style={{backgroundColor: 'transparent', borderColor:'transparent'}}>
                          <CardMedia
                            className={useStyles.cardMedia}
                            image={card.urlToImage}
                            title="Image title">
                          <Typography className="text-left" style={{marginLeft: "1.5%", paddingBottom: '80%', fontWeight: "bold", color: "white", fontSize: 25}}>
                              {catNames[this.state.currentTheme]}
                          </Typography>
                          </CardMedia>
                          <CardContent className={useStyles.cardContent}>
                            <Typography className="text-left" style={{marginLeft: "-5%", color: "#444444", fontSize: 15}}>
                              {card.title}
                            </Typography>
                          </CardContent>
                          </Button>
                          <CardActions className="ml-auto justify-content-end" style={{marginRight: "-3%"}}>
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
                          </CardActions>
                          <Divider/>
                        </Container>
                      </Grid>
                    ))}
                  </Grid>
                </Container>
              </main>
            </React.Fragment>
          );
        }
    }