export const getRandomId = () => {
	const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	return Array.from({ length: 4 })
		.fill(0)
		.map((_) => allowedChars[Math.floor(Math.random() * allowedChars.length)])
		.join('');
};
