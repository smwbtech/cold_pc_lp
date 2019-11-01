<template>
	<section class="application"></section>
</template>

<script>
import IntersectionMixin from '@/assets/js/mixins/IntersectionMixin.js';

export default {
	mixins: [IntersectionMixin],
	data() {
		return {
			sectionName: 'Решения',
			isVisible: false,
			intersectionOptions: {
				threshold: 0.3
			}
		};
	}
};
</script>

<style scoped>
.application {
	width: 100%;
	min-height: 100vh;
	background-color: var(--grey);
}
</style>
