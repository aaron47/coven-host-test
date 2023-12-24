/** @type {import('tailwindcss').Config} */
export default {
	content: ['./components/**/*.{vue}', './app.vue'],
	theme: {
		screens: {
			sm: '277px',
			md: '767px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['forest'],
	},
};
