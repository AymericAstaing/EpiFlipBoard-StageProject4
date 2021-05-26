import React from "react";
import "../css/RenderBack.css";
import Fire from "../config/Fire";
import {addNewPublicFolder, refreshPublicFolder, getPublicFolderWithId, getOpenData, addNewThemePublicFolder, writeUserData, getUserData, writeDefaultUserData, logout} from "./Db"
import {resetUserObj, addNewsInUserFolder, addNewUserFolder, delFolder, delFileInUserFolder, addFolderToFav} from "./UserFunction"
import {getNewsData} from "./News"
import {InputLabel, Select, MenuItem, FormHelperText, FormControl} from '@material-ui/core';


class RenderBack extends React.Component {
	constructor(props) {
		super(props);
		this.logout = logout.bind(this);
		this.state = {
			objToSet: "",
			objsOpen: [],

			UserName: "name",
			UserMail: "mail",
			UserObj: [{filtre: [""]}, {favoris: [""]}],
			PublicObj: [{filtre: [""]}, {favoris: [""]}],

			NewUserFolderName: "",

			FolderSelected: "",

			news: {articles: []},

			objPrint: [],

			PubliObjId: {},
		   };
	}


	// componentWillMount() {
	// 	getUserData.call(this)
	// }

	componentDidMount()
	{
		getOpenData.call(this)
		// writeUserData(this.state.UserName, this.state.UserMail, [])
		getUserData.call(this)
		// getNewsData.call(this)
		fetch("https://newsapi.org/v2/everything?q=apple&from=2020-07-01&sortBy=popularity&apiKey=1464c49870b44de697bed55c8fb487d6")
		.then(response => response.json())
		.then(data => this.setState({news: data}))
	}

	updateInput = e => {
		this.setState({
		  [e.target.name]: e.target.value
		});
	}


	render() {
		// console.log(this.state.UserObj)
		// console.log(this.state.PublicObj)
		console.log(this.state.objPrint)

		const handleChange = (event) => {
			this.setState({FolderSelected: event.target.value})
		};
		return (
			<div className="App_RenderBack row">
				<main className="main_div">
					<div>magazines commun a tout les comptes : </div> <br/>
					{this.state.PublicObj.map((obj, index) => {
						return (
						Object.keys(obj).map((tmp, i) => {
							return (
								<div>
								<div key={index}>{tmp}</div>
								<button onClick={() => addFolderToFav.call(this, obj[tmp][0].id)}>ADD TO FAV</button>
								</div>
							)
					}
					))})}
					<br/> <br/> <br/>

					<div>id magazine favoris : </div> <br/>
					{this.state.UserObj.map((obj, index) => {
						console.log(obj)
						if (obj) {
							return (
								this.state.UserObj[1].favoris.map((fav, i) => {
									if (i != 0) {
										return (
											<div>{fav}</div>
										)
									}
								})
							)
						}
					})}
					<button button onClick={() => getPublicFolderWithId.call(this, "xkbtf8v3aapvzjyweu6ta")}>print file microsoft</button>
					{/* {this.state.objPrint.map((obj, index) => {
						console.log(obj, this.state.objPrint)
						return (
							<div>{obj}</div>
						)
					}
					)} */}


					{/* {Object.keys(this.state.UserObj[1]).map((fav, i) => {
						console.log(fav)

						return (
						Object.keys(fav).map((tmp, i) => {
							console.log(fav, tmp)
							return (
								<div>
								<div key={index}>{tmp}</div>
								</div>
							)
					}
					))
					})}
					<br/> <br/> <br/> */}

					{/* <input
						type="text"
						name="objToSet"
						placeholder="Full name"
						value={this.state.objToSet}
						onChange={this.updateInput}
					/>
					<button onClick={() => writeOpenData.call()}>Send to db</button> */}


					<br/> <br/> <br/>
					{/* <button onClick={() => this.getUserData()}>getinfo</button> */}



					<div>Object associé a ce compte : </div> <br/>
					{this.state.UserObj.map((obj, index) => {
						return (
						Object.keys(obj).map((tmp, i) => {
							// console.log(obj[tmp])
							// console.log("DEBEUG de OBJ[TMP] : " + obj[tmp])
							return (
							obj[tmp].map((news, j) => {
								// console.log(news.title)
								return (
									<div key={Math.random()}>
										<br/>
										<div key={i}>folder : {tmp}</div>
										<div key={j}>{news ? news.title : "empty"}</div>
										<div key={j}> {news.title ? <button onClick={() => delFileInUserFolder.call(this, tmp, j)}>delete this file</button> : ""}
										{/* <button onClick={() => this.delFile(tmp, j)}>delete this file</button> */}
										</div>
									</div>
								)
							}))
						})
					)})}

					<br/><br/><br/><br/>


					<div>
					{this.state.news.articles.map((obj, i) => (
						<li key={i}>
							<span>Title: {obj.title}</span>
							<button onClick={() => addNewsInUserFolder.call(this, obj)}>add</button>
						</li>
					))}
					</div>

					<br/> <br/> <br/>
					<input
						type="text"
						name="NewUserFolderName"
						placeholder="name folder"
						value={this.state.NewUserFolderName}
						onChange={this.updateInput}
					/>
					<button onClick={() => addNewUserFolder.call(this)}>create new folder</button>
					<br/>
					<FormControl style={{minWidth:"120px"}}>
						<InputLabel id="demo-simple-select-label">folder</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={this.state.FolderSelected}
							onChange={handleChange}
						>
						{this.state.UserObj.map((obj, index) => {
							return (
								Object.keys(obj).map((tmp, i) => {
									if (tmp != "filtre" && tmp != "favoris")
										return (
											<MenuItem value={tmp}>{tmp}</MenuItem>
										)
							})
						)})}
						</Select>
					</FormControl>
					<br/>
					<button onClick={() => delFolder.call(this)}>delete this folder</button>
					<button onClick={() => addNewThemePublicFolder.call(this, "microsoft")}>add microsoft folder</button>
				</main>
				<br/><br/><br/><br/>
				<button onClick={() => resetUserObj.call(this)}>reset</button>
				<div className="">
					<button className="logoutbtn button" onClick={this.logout}>
						<span>Log out</span>
					</button>
				</div>
			</div>
		);
	}
}

export default RenderBack;