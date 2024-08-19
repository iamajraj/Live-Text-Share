<script lang="ts">
	import { io } from 'socket.io-client';
	import { page } from '$app/stores';

	/**
	 * Handle State
	 */
	let text: string = '';

	/**
	 * Handle Socket
	 */
	const socket = io();

	// dev
	socket.on('message', (message) => {
		console.log(message);
	});

	socket.on('newUser', (message) => {
		console.log(message);
		socket.emit('text', text);
	});

	socket.emit('roomID', $page.params.id);

	socket.on('text', (data) => {
		text = data;
	});

	const sendText = (ev: Event & { currentTarget: HTMLInputElement }) => {
		socket.emit('text', ev.currentTarget.value, $page.params.id);
	};
</script>

<p class="text-white">Send text</p>

<textarea class="h-32 w-full bg-slate-800 p-4 text-white outline-none">
	{text}
</textarea>

<input bind:value={text} on:input={sendText} type="text" />
