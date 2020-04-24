const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./routers/router');
const cors = require('cors');

const PORT = process.env.PORT || 5000;


const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connection', (socket) =>{
	console.log('New connection!');
	
	socket.on('join', ({name, room}) =>{
		console.log(name, room);
	});
	socket.on('disconnect', () => {
		console.log('User disconnected!');
	});
});


app.listen(PORT, () => console.log(`Server runnin on ${PORT}...`));