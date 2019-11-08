<template>
	<section class="application">
		<ApplicationSlider :is-visible="isVisible" />
		<ArrowLine
			:x-axis="'right'"
			:backgroud-color="'#083358'"
			:is-visible="isVisible"
		/>
	</section>
</template>

<script>
import ApplicationSlider from './ApplicationDisplaySlider.vue';
import IntersectionMixin from '@/assets/js/mixins/IntersectionMixin.js';
import ArrowLine from '@/components/UI/ArrowLine.vue';

export default {
	components: {
		ArrowLine,
		ApplicationSlider
	},
	mixins: [IntersectionMixin],
	data() {
		return {
			sectionName: 'решения',
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
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;
	background-color: var(--grey);
}

/* small desctop displays */
@media (width < 768px) {
	.application {
		overflow: hidden;
	}
}
</style>
