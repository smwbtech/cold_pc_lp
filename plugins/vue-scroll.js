import Vue from 'vue';
import vuescroll from 'vuescroll';
Vue.use(vuescroll, {
	ops: {
		rail: {
			background: 'rgba(255,255,255,.1)'
		},
		bar: {
			background: '#fc3c3c'
		}
	}
});
