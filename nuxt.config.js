const postcssCalc = require('postcss-calc');

module.exports = {
	mode: 'universal',
	/*
	 ** Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || ''
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: [
		'node_modules/normalize.css/normalize.css',
		'@/assets/css/fonts.css',
		'@/assets/css/common.css'
	],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		{ src: '@/plugins/intersection-observer-polyfil.js', mode: 'client' },
		{ src: '@/plugins/vue-visibility-observer.js', mode: 'client' },
		{ src: '@/plugins/vue-mouse-parallax.js', mode: 'client' }
	],
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		'@nuxtjs/eslint-module'
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios'
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {},
	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		postcss: {
			// Add plugin names as key and arguments as value
			// Install them before as dependencies with npm or yarn
			plugins: {
				autoprefixer: {},
				'postcss-preset-env': {
					stage: 2,
					features: {
						'nesting-rules': true,
						'custom-properties': {
							preserve: false,
							importFrom: './assets/css/variables.css'
						}
					}
				}
			},
			preset: {
				// Change the postcss-preset-env settings
				autoprefixer: {
					grid: true
				},
				insertAfter: {
					'custom-properties': postcssCalc
				}
			}
		},
		extend(config, ctx) {}
	}
};
