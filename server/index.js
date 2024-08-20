import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { handler } from '../build/handler.js';

const port = process.env.PORT || 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
	socket.on('roomID', (roomID) => {
		socket.join(roomID);
		socket.emit('message', 'Joined to room!');
		socket.data.roomID = roomID;
		socket.to(roomID).emit('newUser', 'Someone joined to room!');
	});

	socket.on('disconnect', () => {
		io.to(socket.data.roomID).emit('message', 'Someone left from room!');
	});

	socket.on('text', (text) => {
		socket.to(socket.data.roomID).emit('text', text);
	});
});

app.use(handler);
server.listen(port, () => {
	console.log('Server started on port: ' + port);
});
