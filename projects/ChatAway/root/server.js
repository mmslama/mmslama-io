const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./models/messages-models.js');
const usersModels = require('./models/users-models.js');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('./middlewares/passport-config');
const userRoutes = require('./routes/user-routes');
const bodyParser = require('body-parser')
if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config();
}

const app = express();
const server = http.createServer(app);

function setupApp(){
	app.use(express.static(__dirname + '/views'));
	app.use(bodyParser.urlencoded({extended: false}));
	const sessionConfig = {secret: process.env.SESSION,resave: false, saveUninitialized: true};
	app.use(session(sessionConfig));
	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());
	app.use('/',userRoutes);
}
setupApp();


const io = socketio(server);
const botName = 'admin';


io.on('connection', socket => {
	socket.on('joinRoom', (roomName, name) => {
		socket.join(roomName);

		socket.emit('message', formatMessage(botName, 'Welcome to ' + roomName));

		socket.broadcast.to(roomName).emit('message',formatMessage(botName, `${name} has joined the chat.`));

		io.to(roomName).emit('roomUsers', {
			room: 'tempRoom',
			users: 'john'
		});
	});

	socket.on('chatMessage', (msg, name) => {

		io.to('Dog').emit('message', formatMessage(name, msg));
	})

	socket.on('disconnect', () => {
		const user = usersModels.userLeave(socket.id);

		if(user){
			io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat.`));
		
			io.to(user.room).emit('roomUsers', {
			room: user.room,
			users: getRoomUsers(user.room)
		});
		}
	});

});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}...`));