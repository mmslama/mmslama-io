const shortid = require ( 'shortid' );
const bcrypt = require('bcrypt');

class Users {

	constructor(){
		this.users = [];
		if(typeof localStorage === "undefined" || localStorage === null) {
			var LocalStorage = require('node-localstorage').LocalStorage;
			this.localStorage = new LocalStorage('./localData');
		}
	}

	async add(name, email, password){
		if(this.findUser('email', email)){
			throw new Error('Email already registered');
		}
		const id = shortid.generate();
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = {id:id, name:name, email:email, password:hashedPassword};
		this.users.push(user);


		const stringUserArray = JSON.stringify(this.users);
		this.localStorage.setItem('userList', stringUserArray);
	}

	findUser(key, value){
		const userList = JSON.parse(this.localStorage.getItem('userList'));
		const user = userList.find(item => item[key] === value)
		return user;
	}

//Chat
	userJoin(id, username, room){
		const user = {id, username, room};
		this.users.push(user);
		return user;
	}

//Chat
	getCurrentUser(id){
		return this.users.find(user => user.id === id);
	}

//Chat
	userLeave(id){
		const index = this.users.findIndex(user => user.id === id);

		if(index !== -1){
			return this.users.splice(index, 1)[0];
		}
	}

//Chat
	getRoomUsers(room){
		return this.users.filter(user => user.room === room);
	}
}
module.exports = new Users ();