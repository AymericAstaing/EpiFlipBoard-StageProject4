import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

import { getUserData, getOpenData, writeUserData, firstSetNameUser, getPublicFolderWithId } from '../../../back/Db';
import { addNewUserFolder, delFileInUserFolder, delFolder } from '../../../back/UserFunction'

function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },

  accueil_header: {
    width: "80vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "6em",
    fontFamily: "-apple-system"
    },
    accueil_header_info: {
        width: "80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // fontSize: "6em",
        // fontFamily: "-apple-system"
    },
    accueil_header_favori: {
        // width: "80vw",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center"
    },
    table: {
        // minWidth: 650,
    },
    table_container: {
        margin: "auto",
        width: "40vw",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    preference: {
        display: "flex",
        justifyContent: "space-between",
        width: "60%",
        margin: ".5rem",
        alignItems: "center",

    }
});

const FolderSample = [{
    folder1: [
        { title: "n1" }
    ]
},
{
    folder2: [
        { title: "n2" },
        { title: "n3" }
    ]
}]


function handleChecked(checkedBox, item) {
    console.log("sallslalsa", item)
    if (item in checkedBox)
        checkedBox.remove(item)
    else
        checkedBox.push(item)
    console.log(checkedBox)
}


class CustomTabs extends React.Component {
    Run = false
    constructor(props) {
        super(props)
        this.state = {
            UserName: ".",
            UserMail: ".",
            UserObj: [],
            FolderSelected: "",
			NewUserFolderName: "",
            objToSet: "",
            objsOpen: [],
            PublicObj: null,
            PublicObjs: [],

            Folders: [false, false],

            NewUserFolderName: "",

            checkedBox: [],
            value: 0,
            InfoParams: [],
            news: {articles: []}

        }
    }



    componentDidMount() {
        getOpenData.call(this)
        getUserData.call(this)
        this.setState({ InfoParams: [
            { name: "Nom", data: this.state.UserName },
            { name: "Mail",  data: this.state.UserMail }
        ]})
        console.log("Component mount:", this.state)
    }

    handleCheckbox = (event) => {
        var list = this.state.checkedBox
        var c = event.target.checked
        const i = list.findIndex(x => x.newsId == event.target.id && x.folder == event.target.name)
        var n = event.target.id
        console.log("target:", event.target, c)
        console.log("findIndex:", list, i)

        if (c)
            list.push({ newsId: n, folder: event.target.name })
        else
            list.splice(i, 1)
        this.setState({
            checkedBox: list
        })
        console.log("checkedBox:", this.state.checkedBox, list)
    };

    handleCreateFolder = (event, t) => {
        console.log("======", this.state)
        const enteredName = prompt('Nom du dossier:')

        // var obj = thist.state.UserObj
        // var instance = {}
        // instance[enteredName] = []
        // obj.push(instance)
        // this.setState = {
        //     UserObj: obj
        // }
        this.state.NewUserFolderName = enteredName
        addNewUserFolder.call(this)
        console.log("created:", this.state.UserObj)
    }

    handleDeleteNews = (event) => {
        for (var n in this.state.checkedBox) {
            // console.log("DELETE", this.state.checkedBox[n].folder, this.state.checkedBox[n].newsId)
            delFileInUserFolder.call(this, this.state.checkedBox[n].folder, this.state.checkedBox[n].newsId)
        }

        // console.log("===handleDeleteNews===", this.state.checkedBox)
    }

    handleMoveNews = (event) => {

    }

    handleFolder = (event, name) => {
        console.log("handleFolder::", event, this.state.Folders)
        for (var i in this.state.PublicObj) {
            Object.keys(this.state.PublicObj[i]).map((folder, idx) => {
                // console.log("folder: ", this.state.PublicObj[i][folder][0]["id"], idx, event, this.state.UserObj[1]["favoris"])
                if (this.state.UserObj[event][name].indexOf(this.state.PublicObj[i][folder][0]["id"]) > -1 )
                    console.log("find")
            })
            console.log(">>>==", this.state.PublicObj[i])
            // console.log(">>>==", this.state.PublicObj[i][0])
            // console.log(">>>==", this.state.PublicObj[i]["id"])
            // console.log(">>>==", this.state.PublicObj[i]["microsoft"])
            // if (this.state.PublicObj[i]["id"] == event)
        }

        this.state.Folders[event] = !this.state.Folders[event]
        this.setState({ Folders: this.state.Folders });


        // getPublicFolderWithId.call(this, event)
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    handleInfoParams = (row) => {
        var newData = ""
        switch (row.name) {
        case "Mail":
            newData = prompt('Nouvelle adresse mail:', this.state.UserMail)
            if (newData != "")
                writeUserData.call(this, this.state.UserName, newData, this.state.UserObj)
            break;
        case "Nom":
            newData = prompt('Nouveau nom:', this.state.UserName)
            if (newData != "")
                writeUserData.call(this, newData, this.state.UserMail, this.state.UserObj)
            break;
        }
        getUserData.call(this)
        // console.log("InfoParamHandle: ", row, newData)
    }

    render() {
        if (this.state.UserName != "") {
            this.state.InfoParams = [
                { name: "Nom", data: this.state.UserName },
                { name: "Mail",  data: this.state.UserMail }
            ]
        }
        const { classes } = this.props;
        // console.log("load:", this.state, this.state.InfoParams)

        this.state.UserObj.map((obj, index) => {
            if (index != 1) return
            // console.log("=====", obj)
            Object.keys(obj).map((tmp, i) => {
                // console.log("\t===", tmp)
                obj[tmp].map((news, j) => {
                    if (!j) return
                    // console.log("\t\t=", news)
                    // getPublicFolderWithId.call(this, news)
                    // console.log("resssssss:", this.state.PublicObj)
                })
            })
        })

        return (
            <div>
            <Button onClick={ () => {
                firstSetNameUser.call(this)
                getUserData.call(this)
            } }></Button>

                <div className={classes.root}>
                    <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={this.state.value}
                    onChange={this.handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                    >
                    <Tab label="Accueil" {...a11yProps(0)} />
                    <Tab label="Informations personnelles" {...a11yProps(1)} />
                    <Tab label="Données et personnalisation" {...a11yProps(2)} />
                    <Tab label="Sécurité" {...a11yProps(3)} />
                    </Tabs>
                    <TabPanel value={this.state.value} index={0}>
                    <div className={classes.accueil_header}>
                        Bienvenue {this.state.UserName}
                    </div>
                    <div className={classes.accueil_header_info}>
                        Gérez vos informations, ainsi que la confidentialité et la sécurité de vos données pour profiter au mieux de votre site web favori
                    </div>
                    </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    <div className={ classes.table_container }>


                    <TableContainer className= {classes.table_container} component={ Paper }>
                    <Table className={ classes.table } aria-label="simple table">
                        <TableHead>
                        </TableHead>
                        <TableBody>
                        { this.state.InfoParams.map((row, index) => (
                            <TableRow key={ row.name } onClick={ () => { this.handleInfoParams(row) } }>
                            <TableCell component="th" scope="row">
                                { row.name }
                            </TableCell>
                            <TableCell align="right">{row.data}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </div>

                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                    <div>
                        <div>
                            <Button onClick={ this.handleCreateFolder } variant="contained">Créer un dossier</Button>
                            <Button onClick={ this.handleMoveNews } variant="contained" color="primary">Déplacer</Button>
                            <Button onClick={ this.handleDeleteNews } variant="contained" color="secondary">Supprimer</Button>
                        </div>
                        { this.state.UserObj.map((obj, index) => {
                            return (
                                Object.keys(obj).map((tmp, i) => {
                                    return (
                                        <div>
                                            { tmp }
                                            {console.log("APAPAPAPAPAP", index)}
                                            {index < 2 ? <Checkbox id={ "show-" + index } indeterminate inputProps={{ 'aria-label': 'indeterminate checkbox' }} onClick={ () => {
                                                console.log("FETCH PUBLIC", this.state, obj)
                                                this.handleFolder(index, tmp)
                                            } }/> : <Button variant="contained" color="secondary" className={classes.button} onClick={ () => {
                                                this.state.FolderSelected = tmp
                                                delFolder.call(this)
                                            } }>X</Button> }
                                            { index < 2 ?
                                                null
                                            :
                                                <ul>
                                                { obj[tmp].map((news, j) => {
                                                    if (news.title == "" || !j)
                                                        return null
                                                    // getPublicFolderWithId.call(this, news)
                                                    // console.log("PUBLIC:", this, this.state.PublicObj)
                                                    return (
                                                        <li>
                                                            { news.title }
                                                            <Checkbox id={ j } name={ tmp } onChange={ this.handleCheckbox } />
                                                        </li>
                                                        )
                                                    })
                                                }
                                                </ul>
                                            }
                                        </div>
                                )})
                        )})}


                    </div>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={3}>
                    Sécurité
                    </TabPanel>
                </div>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(CustomTabs)