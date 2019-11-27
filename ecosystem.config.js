module.exports = {
	apps: [
		{
			name: 'nuxt',
			script: './node_modules/nuxt-start/bin/nuxt-start.js',
			env: {
				HOST: '0.0.0.0',
				PORT: 3007,
				NODE_ENV: 'production'
			}
		}
	]
};
