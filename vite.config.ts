import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type Plugin } from 'vite';
import { Server } from 'socket.io';

const webSocketServer: Plugin = {
	name: 'webSocketServer',
	configureServer: (server) => {
		if (!server.httpServer) return;
		const io = new Server(server.httpServer);

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
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
