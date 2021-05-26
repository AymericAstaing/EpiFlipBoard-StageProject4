import React from 'react';
import { writeOpenData, getOpenData, writeUserData, getUserData, writeDefaultUserData, firstSetNameUser } from "../../../back/Db"
// import Fire from "../config/Fire";
import CustomTabs from '../micro-components/TabPanel';
import getNewsData from "../../../back/News"

import Button from '@material-ui/core/Button'

export default class UserPage extends React.Component {
    constructor(props) {
        super(props);
        // this.logout = this.logout.bind(this);
        this.state = {
            objToSet:   "",
            objsOpen:   [],

            UserName:   "",
            UserMail:   "",
            UserObj:    [],
            PublicObj:  [],

            NewUserFolderName:  "",

            FolderSelected:     "",

            news: { articles: [] },

            checkedSelection:   []
        };
    }

    componentDidMount() {

    }


    render() {
        return (
            <div position = "static">
                <CustomTabs/>
            </div>
        )
    }
}