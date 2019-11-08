<template>
	<section class="first-display">
		<AppMenu />
		<ArrowLine :is-visible="showLine" />
		<FirstDisplayTitle :is-visible="showTitle" :show-list="showList" />
		<FirstDisplayDescription :show-description="showDescription" />
		<!-- bacground with animated clouds -->
		<FirstDisplayBackground
			:is-visible="isVisible"
			@backround-loaded="backgeoundLoadedHandler"
		/>
		<!-- end - bacground with animated clouds -->
	</section>
</template>

<script>
import FirstDisplayBackground from './FirstDisplayBackground.vue';
import FirstDisplayTitle from './FirstDisplayTitle.vue';
import FirstDisplayDescription from './FirstDisplayDescription.vue';
import ArrowLine from '@/components/UI/ArrowLine.vue';
import AppMenu from '@/components/UI/AppMenu.vue';
import IntersectionMixin from '@/assets/js/mixins/IntersectionMixin.js';

export default {
	components: {
		ArrowLine,
		AppMenu,
		FirstDisplayBackground,
		FirstDisplayDescription,
		FirstDisplayTitle
	},
	mixins: [IntersectionMixin],

	data() {
		return {
			sectionName: 'Главный экран',
			isVisible: false,
			showTitle: false,
			showLine: false,
			showList: false,
			showDescription: false,
			intersectionOptions: {
				threshold: 1
			}
		};
	},

	methods: {
		backgeoundLoadedHandler() {
			this.showTitle = true;
			setTimeout(() => (this.showLine = true), 300);
			setTimeout(() => (this.showList = true), 600);
			setTimeout(() => (this.showDescription = true), 1500);
		}
	}
};
</script>

<style scoped>
.first-display {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	height: 100vh;
	overflow: hidden;

	& header {
		width: 100%;
	}
}

/* mobile phones */
@media (width < 768px) {
	.first-display {
		height: auto;
		min-height: 100vh;
	}
}
</style>
