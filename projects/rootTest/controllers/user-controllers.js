const users = require('../models/users-models');
const passport = require('../middlewares/passport-config');
const express = require('express');

class UserControllers{

	getIndex(request, response){
		response.sendFile('notindex.html', {root: './views/'});
	}

	postUserData(request, response){
		response.json({userData: request.user});
	}

	getLogin(request, response){
		response.sendFile('login.html', {root: './views/'});
	}

	getRegister(request, response){
		response.sendFile('register.html', {root: './views/'});
	}

	postLogin(request, response, next){
		const config = {};
		config.successRedirect = '/';
		config.failureRedirect = '/login';
		config.failureFlash = true;
		const authHandler = passport.authenticate('local', config);
		authHandler(request, response, next);
	}

	postRegister(request, response){
		try{
			const {name ,email ,password} = request.body;
			users.add(name, email, password);
			response.redirect('/login');
		}
		catch{
			response.redirect('/register');
		}
	}

	postLogout(request, response){
		request.logOut();
		response.redirect('login');
	}
}

module.exports = new UserControllers();