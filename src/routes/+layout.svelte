<script>
	import '../app.css';
</script>

<div class="flex min-h-screen flex-col">
	<!-- Navigation -->
	<nav class="bg-blue-700 py-4 shadow-md">
		<div class="container mx-auto flex items-center justify-between px-6">
			<a href="/" class="text-3xl font-bold text-white">Live Text Share</a>
			<ul class="flex space-x-6 text-lg text-white">
				<li><a href="#features" class="hover:underline">Features</a></li>
				<li><a href="#get-started" class="hover:underline">Get Started</a></li>
				<li><a href="#contact" class="hover:underline">Contact</a></li>
			</ul>
		</div>
	</nav>
	<slot></slot>
	<footer class="bg-blue-700 py-4 text-white">
		<div class="container mx-auto px-6 text-center">
			<p>&copy; 2024 Secure Live Text Share. All rights reserved.</p>
		</div>
	</footer>
</div>
