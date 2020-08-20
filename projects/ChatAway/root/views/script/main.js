const chatMessages = document.querySelector('.chat-messages');
const username = document.getElementById('user-name');
const userList = document.getElementById('users');
const chatBtn = document.getElementById('chatButton');
const roomType = document.getElementById('roomType');
const roomButton = document.getElementById('room-button');
const roomTitle = document.getElementById('room-name');

async function getData(){
	const userFetch = await fetch('http://localhost:3000/user', {
		method: 'POST'
	});
	const userData = await userFetch.json();
	return userData;
}
getData().then((user) =>{
	userInfo = user;
	name = user.userData.name;
	username.innerText = name;
});








const socket = io();

function roomSubmit() {
	const roomName = roomType.value;
	roomType.value = '';
	roomTitle.innerHTML = 'Room : ' + roomName;
	chatMessages.innerHTML = '';
	socket.emit('joinRoom', roomName, name);
}

roomButton.addEventListener('click', roomSubmit);

socket.on('roomUsers',({room, users}) => {
	console.log('May have to get rid of this.');
});

socket.on('message', message =>{
	outputMessage(message);
	chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatBtn.addEventListener('click', e => {
	e.preventDefault();
	const messageBox = document.getElementById('msg');

	const msg = messageBox.value;
	
	socket.emit('chatMessage', msg, name);
	console.log(messageBox.value);
	messageBox.value = '';
	messageBox.focus();

});

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