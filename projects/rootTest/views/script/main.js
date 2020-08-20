const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const username = document.getElementById('user-name');
const userList = document.getElementById('users');
const room = document.getElementById('room');
const roomType = document.getElementById('roomType');
const roomButton = document.getElementById('room-button');

async function getData(){
	const userFetch = await fetch('http://localhost:3000/user', {
		method: 'POST'
	});
	const userData = await userFetch.json();
	return userData;
}
getData().then((user) =>{
	name = user.userData.name;
	username.innerText = name;
});










const socket = io();

roomButton.addEventListener('click', e =>{
	const roomName = roomType.value;
	console.log(roomName)
	socket.emit('joinRoom', roomName);
});


socket.on('roomUsers',({room, users}) => {
	console.log('May have to get rid of this.');
});

socket.on('message', message =>{
	console.log(message);
	outputMessage(message);
	chatMessages.scrollTop = chatMessages.scrollHeight;
});
/*
chatForm.addEventListener('submit', e => {
	e.preventDefault();
	
	const msg = e.target.elements.msg.value;
	
	socket.emit('chatMessage', msg);
	e.target.elements.msg.value = '';
	e.target.elements.msg.focus();
});
*/
function outputMessage(message){
	const div = document.createElement('div');
	div.classList.add('message');
	div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
						<p class="text">
							${message.text}
						</p>`;
	document.querySelector('.chat-messages').appendChild(div);
}

function outputUsername(username){
	username.innerText = username;
}

function outputUsers(users){
	userList.innerHTML = `${users.map(user => `<li>${user.username}</li>`).join('')}`;
}