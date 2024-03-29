/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: { primary: '#068FFF', secondary: '#068FFF' },
			screens: {
				sm: '710px',
				md: '940px',
			},
		},
	},
	plugins: [],
};
