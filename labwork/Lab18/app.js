const express = require('express');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('./middlewares/passport-config');
const app = express();
const PORT = 3000;
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser')
if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config();
}


function setupApp(){
	app.set('view-engine','ejs');
	app.use(bodyParser.urlencoded({extended: false}));
	const sessionConfig = {secret: process.env.SESSION,resave: false, saveUninitialized: true};
	app.use(session(sessionConfig));
	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use('/',userRoutes);
}
setupApp();

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}...`);
});