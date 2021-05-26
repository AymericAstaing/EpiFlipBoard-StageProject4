
import {addNewPublicFolder, refreshPublicFolder, deletePublicFolder, getOpenData, writeUserData, getUserData, writeDefaultUserData} from "./Db"


	// export function getUserData() {
	// 	getUserData.call(this)
	// }

	export function resetUserObj () {
        writeUserData(this, this.state.UserName, this.state.UserMail, [], "")
        getUserData.call(this)
	}

    // export function writeUserData() {
	// 	// console.log(this.state.UserObjToSet + "push dans" + this.state.UserObj)
	// 	console.log("set this : ", this.state.UserObj)
	// 	writeUserData(this.state.UserName, this.state.UserMail, this.state.UserObj)
	// 	this.getUserData()
	// }

	// export function writeExterUserData(obj) {
	// 	writeUserData(this.state.UserName, this.state.UserMail, obj)
	// 	this.getUserData()
	// }

	// export function writeOpenData () {
	// 	if (this.state.objToSet === "")
	// 		alert("name empty")
	// 	else
	// 		writeOpenData(this.state.objToSet)
	// 	getOpenData.call(this)
	// }


	export function addNewUserFolder () {
		// UserObj: [{name : [{}, {}]}],
        // [{yes : [{oui : "test"}, {oui : "test"}]}]
		if (this.state.UserObj.length <= 0) {
			let tmptab = []
			let tmpobj = {"id" : 1}
			tmptab.push(tmpobj)
			let folder = { filtre: tmptab };
			this.state.UserObj.push(folder)

			tmptab = []
			tmpobj = {"id" : 2}
			tmptab.push(tmpobj)
			folder = { favoris: tmptab };
			this.state.UserObj.push(folder)
		}
		// console.log(this.state.UserObj)
		if (this.state.NewUserFolderName === "")
			alert ("name empty")
		else {
			let tmptab = []
			let idnum = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
			let tmpobj = {"id" : idnum}
			tmptab.push(tmpobj)
			let folder = { [this.state.NewUserFolderName]: tmptab };
			this.state.UserObj.push(folder)
            this.setState({NewUserFolderName: ""})
			// console.log(this.state.UserName, this.state.UserMail, this.state.UserObj)
			addNewPublicFolder.call(this, idnum, folder)
            writeUserData.call(this, this.state.UserName, this.state.UserMail, this.state.UserObj, this.state.UserImg)
            getUserData.call(this)   
		}
	}


	export function addNewsInUserFolder (news) {
		// [{yes : [{oui : "test"}, {oui : "test"}]}]
		let find = false
		let num = 0
		this.state.UserObj.map((obj, index) => {
			Object.keys(obj).map((tmp, i) => {
				if (tmp === this.state.FolderSelected) {
					find = true
					num = index
				}
			})
		})
		if (find === true) {
			this.state.UserObj[num][this.state.FolderSelected].push(news)
			// console.log(this.state.UserObj[num][this.state.FolderSelected][0])
			writeUserData.call(this, this.state.UserName, this.state.UserMail, this.state.UserObj, this.state.UserImg)
			refreshPublicFolder.call(this, this.state.UserObj[num][this.state.FolderSelected][0].id, this.state.UserObj[num])
			getUserData.call(this)
			getOpenData.call(this)
		}
	}

	export function addFolderToFav(id) {
		this.state.UserObj[1]["favoris"].push(id)
		writeUserData.call(this, this.state.UserName, this.state.UserMail, this.state.UserObj, this.state.UserImg)
	}

	export function delFolder () {
		let num = 0
		let find = false
		this.state.UserObj.map((obj, index) => {
			Object.keys(obj).map((tmp, i) => {
				if (tmp === this.state.FolderSelected) {
					num=index
					find=true
				}
			})
		})
		if (find === true) {
			deletePublicFolder.call(this, this.state.UserObj[num][this.state.FolderSelected][0].id)
			delete this.state.UserObj[num]
		}
		writeUserData.call(this, this.state.UserName, this.state.UserMail, this.state.UserObj, this.state.UserImg)
        getUserData.call(this)
	}

	export function delFileInUserFolder (folder, indexfile) {
		// [{yes : [{oui : "test"}, {oui : "test"}]}]
		let tab = []
		let globaltab = []

		// console.log(folder, index)
		let num = 0
		let find = false
		this.state.UserObj.map((obj, index) => {
			Object.keys(obj).map((tmp, i) => {
				if (tmp === folder) {
					num=index
					find=true
				}
			})
			if (find === true) {
				this.state.UserObj[num][folder].map((news, j) => {
					if (j !== indexfile)
						tab.push(news)
				})
				globaltab.push({[folder]: tab})
				refreshPublicFolder.call(this, this.state.UserObj[num][folder][0].id, {[folder]: tab})
				find = false
			} else
                globaltab.push(obj)
        })
        
        // console.log(this.state.UserName, folder, indexfile)
		writeUserData.call(this, this.state.UserName, this.state.UserMail, globaltab, this.state.UserImg)
		
        getUserData.call(this)
	}
