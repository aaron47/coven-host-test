export default defineNuxtConfig({
	devtools: { enabled: false },
	devServer: {
		host: '127.0.0.1',
		port: 52300,
	},
	ssr: false,
	modules: ['@nuxtjs/tailwindcss', 'vue3-carousel-nuxt', 'nuxt-icon'],
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	tailwindcss: {
		configPath: '~/tailwind.config.js',
	},
	router: {
		options: {
			linkActiveClass: 'text-purple-400',
		},
	},
});
