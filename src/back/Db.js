import {Component} from "react";
import Fire from "../config/Fire";
import firebase from "firebase"
import {resetUserObj, addNewsInUserFolder, addNewUserFolder, delFolder, delFileInUserFolder} from "./UserFunction"



export function logout() {
	Fire.auth().signOut();
}

export function addNewThemePublicFolder(theme) {
	const db = firebase.firestore();
	let tmptab = []
	let idnum = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	let tmpobj = {"id" : idnum}
	tmptab.push(tmpobj)
	fetch("https://newsapi.org/v2/everything?q="+theme+"&from=2020-07-01&sortBy=popularity&apiKey=1464c49870b44de697bed55c8fb487d6")
	  .then(response => response.json())
	  .then(data => {data.articles.map((news, index) => {
		// if(index < 4)
			tmptab.push(news)
	  })})
	//   .then(data => console.log(tmptab))
	  .then(data => data = { "microsoft" : tmptab })
	  .then(data => db.collection("magazines").doc(idnum).set(data))
}

export function addNewPublicFolder(num, tab) {
	const db = firebase.firestore();
	const magazines = db.collection("magazines").doc(num).set(tab);
}


export function refreshPublicFolder(num, tab) {
	const db = firebase.firestore();
	// console.log("tab = ", tab)
	const magazines = db.collection("magazines").doc(num).set(tab);
}


export function deletePublicFolder(num) {
	const db = firebase.firestore();
	console.log("tab = ", num)
	const magazines = db.collection("magazines").doc(num).delete();
}


export function getOpenData() {
	let objs;
	Fire.firestore()
		.collection("magazines")
		.get()
		.then((querySnapshot) => {
			objs = querySnapshot.docs.map((doc) => doc.data());
			// console.log("les obj", objs)
			this.setState({
				PublicObj: objs,
			});
		});
}


export function getPublicFolderWithId(num) {
	var docRef = Fire.firestore().collection("magazines").doc(num);
	docRef.get().then(function(doc) {
		if (doc.exists) {
			this.setState({PubliObj: doc.data()});
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch(function(error) {
		console.log("Error getting document:", error);
	});
}


// export function writeDefaultUserData() {
// 	var userId = firebase.auth().currentUser.uid;
// 	firebase.database().ref('users/' + userId).set({
// 	  username: "",
// 	  email: "",
// 	  objet: []
// 	});
//   }

 export function firstSetNameUser () {
	var userId = firebase.auth().currentUser.uid;
	if (this.state.UserName !== "Anonymous"  && this.state.UserName !== "name")
		return
	let stat = firebase.database().ref('/users/new').once("value").then((info) => {
		let name = info.val().username
		let mail = info.val().email
		this.setState({UserName: name, UserMail: mail})
		firebase.database().ref('users/' + userId).set({
				username: name,
				email: mail,
				objet: [{filtre: [{"id" : 1}]}, {favoris: [{"id" : 2}]}],
				image: "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg"
		});
	});
 }

 export function writeUserData(name, email, obj, img) {
	var userId = firebase.auth().currentUser.uid;
	// console.log("DB : ", userId, name, email, obj)
	firebase.database().ref('users/' + userId).set({
	  username: name,
	  email: email,
	  objet: obj,
	  image: img
	});
  }

//   export function resetUserData() {
// 	var userId = firebase.auth().currentUser.uid;
// 	firebase.database().ref('users/' + userId).set({
// 	  username: "",
// 	  email: "",
// 	  objet: []
// 	});
//   }

  export function getUserData() {
	var userId = firebase.auth().currentUser.uid;
	return firebase.database().ref('/users/' + userId).once("value").then((info) => {
		var username = (info.val() ? info.val().username : 'Anonymous')
		var email = (info.val() ? info.val().email : 'noemail')
		var obj = (info.val() ? info.val().objet : [{filtre: [{"id" : 1}]}, {favoris: [{"id" : 2}]}])
		var image = (info.val() ? info.val().image : "https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg")
		this.setState({
			UserName: username,
			UserMail: email,
			UserObj: obj,
			UserImg: image
		});
	});
}


	export function getLoggedData() {
		var user = firebase.auth().currentUser;
		// var user = Fire.database().ref().child('users');
		var name, email, uid

		// console.log(user)

		if (user != null) {
			email = user.email;
			uid = user.uid;
			name = user.displayName;
		}
		// console.log(name, email, uid)
	};

