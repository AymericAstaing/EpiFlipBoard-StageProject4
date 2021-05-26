import React, { Component } from 'react';
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

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      export default class TopicArticleGrid extends Component {

        constructor(props) {
          super(props)
          this.state = {
            news: {
				articles: []
			}
          };
        }

        componentDidMount() {
          getNewsData.call(this);
        }

        getBtfDate(currentDate)
        {
          const date = new Date(currentDate)
          const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' })
          const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date )

          return `${month} ${day}`;
        }

        render () {
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
                <Container className={useStyles.cardGrid} style={{maxWidth: 79.7 + 'em'}}>
                  <Grid container spacing={4}>
                    {console.log(this.state.news.articles[0])}
                    {this.state.news.articles.map((card) => (
                      <Grid item key={card} xs={12} sm={6} md={4}>
                        <Container className={useStyles.card}  style={{ borderRadius: '0px', marginBottom:'15%'}}>
                        <Button onClick={this.props.goToPreview} style={{backgroundColor: 'transparent', borderColor:'transparent'}}>
                        <Nav className="ml-auto">
                          <Image className="text-left" src="https://source.unsplash.com/random" resizeMode="contain" style={{marginTop: "1%", marginBottom: "4%", width: 2.2 + 'em', height: 2.2 + 'em'}} roundedCircle/>
                          <Typography className="text-left" style={{textAlign: "justify", marginLeft: "3%", marginTop: "3.1%", color: "black", color: "#444444", fontSize: 13}}>
                          {card.author}
                          </Typography>
                        </Nav>
                          <CardMedia
                            resizeMode="contain"
                            style={{height: 15 + 'em'}}
                            className={useStyles.cardMedia}
                            image={card.urlToImage}
                            title="Image title">
                          </CardMedia>
                          <CardContent className={useStyles.cardContent}>
                            <Typography className="text-left" style={{fontWeight: "bold", marginLeft: "-5%", color: "red", fontSize: 13}}>
                              #CORONAVIRUS
                            </Typography>
                            <Typography className="text-left" style={{fontWeight: "bold", marginLeft: "-5%",  marginTop: "2%", color: "black", fontSize: 20}}>
                              {card.title}
                            </Typography>
                            <Typography className="text-left" style={{ marginLeft: "-5%", marginTop: "2%", color: "#9999a9", fontSize: 13}}>
                            {card.source.name}
                            </Typography>
                            <Typography className="text-left" style={{marginLeft: "-5%",  marginTop: "2%", color: "black", fontSize: 18}}>
                              {card.content.substring(0, 140)  + " ..."}
                            </Typography>
                          </CardContent>
                          </Button>
                          <CardActions className="ml-auto justify-content-end" style={{marginRight: "-3%"}}>
                            <Container className="ml-auto justify-content-start">
                              <Typography style={{marginTop: "3%", marginLeft: -1.7 + 'em', color: "#9999a9", fontSize: 18}}>
                                  {this.getBtfDate(card.publishedAt)}
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