<script>
	import '../app.css';
	import { slide } from 'svelte/transition';

	let showMobileMenu = false;
	const toggleMobileMenu = () => {
		showMobileMenu = !showMobileMenu;
	};
</script>

<div class="flex min-h-screen flex-col">
	<!-- Navigation -->
	<nav class="bg-gray-800 py-4 shadow-md">
		<div class="container mx-auto flex items-center justify-between px-6">
			<a href="/" class="text-lg font-bold text-white sm:text-2xl md:text-3xl">Live Text Share</a>

			<!-- Mobile Menu Button -->
			<button
				id="menu-toggle"
				class="text-white focus:outline-none lg:hidden"
				aria-label="Toggle Navigation Menu"
				on:click={toggleMobileMenu}
			>
				<svg
					class="h-6 w-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					></path>
				</svg>
			</button>

			<!-- Desktop Navigation -->
			<ul class="hidden space-x-6 text-lg text-white lg:flex">
				<li><a href="/#features" class="hover:underline">Features</a></li>
				<li><a href="/#get-started" class="hover:underline">Get Started</a></li>
				<li><a href="/#contact" class="hover:underline">Feedback</a></li>
			</ul>
		</div>

		<!-- Mobile Menu -->
		{#if showMobileMenu}
			<div
				transition:slide={{ axis: 'y' }}
				id="mobile-menu"
				class="absolute left-0 top-16 w-full bg-gray-800 text-white lg:hidden"
			>
				<ul class="flex flex-col space-y-4 px-6 py-4">
					<li><a href="/#features" class="hover:underline">Features</a></li>
					<li><a href="/#get-started" class="hover:underline">Get Started</a></li>
					<li><a href="/#contact" class="hover:underline">Feedback</a></li>
				</ul>
			</div>
		{/if}
	</nav>
	<slot></slot>
	<!-- Footer -->
	<footer class="bg-gray-900 py-4 text-white">
		<div class="container mx-auto px-6 text-center">
			<p>
				&copy; 2024 Live Text Share. All rights reserved. <a
					class="underline"
					href="https://github.com/iamajraj">@iamajraj</a
				>
			</p>
		</div>
	</footer>
</div>
