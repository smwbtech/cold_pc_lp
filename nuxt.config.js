const postcssCalc = require('postcss-calc');

module.exports = {
	mode: 'universal',
	server: {
		port: 3007
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Промышленные процессорные платы IEI',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1'
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'Промышленные встраиваемые платы IEI для экстремально низких температур (-40 + 85).  Для систем СКУД, видеонаблюдения за нефтепроводом, платёжных терминалов расположенных на улице.'
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content:
					'платы iei, промышленные процессорные платы, встраиваемые платы iei, платы на -40'
			},
			{
				hid: 'yandex-verification',
				name: 'yandex-verification',
				content: '102a0e791118320b'
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
		{ src: '@/plugins/vue-mouse-parallax.js', mode: 'client' },
		{ src: '@/plugins/smooth-scroll.js', mode: 'client' },
		{ src: '@/plugins/vue-scroll.js', mode: 'client' }
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
		'@nuxtjs/axios',
		[
			'@nuxtjs/yandex-metrika',
			{
				id: '56420104',
				webvisor: true,
				clickmap: true,
				useCDN: false,
				trackLinks: true,
				accurateTrackBounce: true
			}
		]
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
