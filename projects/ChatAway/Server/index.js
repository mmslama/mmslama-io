const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./routers/router');

const PORT = process.env.PORT || 5000;


const app = express();

app.use(router);
app.listen(PORT, () => console.log(`Server runnin on ${PORT}...`));

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) =>{
	console.log('New connection!');
	
	socket.on('join', ({name, room}) =>{
		console.log(name, room);
	});
	socket.on('disconnect', () => {
		console.log('User disconnected!');
	});
});



