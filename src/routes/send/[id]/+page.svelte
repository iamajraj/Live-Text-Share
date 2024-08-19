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

	const sendText = (ev: Event & { currentTarget: HTMLTextAreaElement }) => {
		socket.emit('text', ev.currentTarget.value, $page.params.id);
	};
</script>

<div class="flex min-h-screen flex-col bg-gray-100 p-6">
	<!-- Header -->
	<header class="mb-6 text-center">
		<h1 class="text-3xl font-bold text-gray-900">Live Text Share</h1>
		<p class="text-gray-600">Share and collaborate on text in real-time.</p>
	</header>

	<!-- Main Content -->
	<div class="flex flex-col lg:flex-row lg:space-x-6">
		<div class="mb-6 flex-1 rounded-lg bg-white p-6 shadow-md lg:mb-0">
			<h2 class="mb-4 text-2xl font-semibold text-gray-900">Write Your Message</h2>
			<textarea
				rows="10"
				placeholder="Type your message here..."
				class="w-full rounded-lg border border-gray-300 p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
				bind:value={text}
				on:input={sendText}
			></textarea>
		</div>

		<!-- Shared Text Area -->
		<div class="flex-1 rounded-lg bg-white p-6 shadow-md">
			<h2 class="mb-4 text-2xl font-semibold text-gray-900">Live Updates</h2>
			<div
				class="w-full rounded-lg border border-gray-300 bg-gray-50 p-4"
				style="min-height: 300px; white-space: pre-wrap;"
			>
				{#if text}
					<p class="text-gray-900">{text}</p>
				{:else}
					<p class="text-gray-500">No text to display. Start typing to see live updates.</p>
				{/if}
			</div>
		</div>
	</div>
</div>
