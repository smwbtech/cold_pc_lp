<template>
	<section class="first-display">
		<ArrowLine :is-visible="showLine" />
		<FirstDisplayTitle :is-visible="showTitle" :show-list="showList" />
		<FirstDisplayDescription :show-description="showDescription" />
		<!-- bacground with animated clouds -->
		<FirstDisplayBackground
			@backround-loaded="backgeoundLoadedHandler"
			:is-visible="isVisible"
		/>
		<!-- end - bacground with animated clouds -->
	</section>
</template>

<script>
import FirstDisplayBackground from './FirstDisplayBackground.vue';
import FirstDisplayTitle from './FirstDisplayTitle.vue';
import FirstDisplayDescription from './FirstDisplayDescription.vue';
import ArrowLine from '@/components/UI/ArrowLine.vue';
import IntersectionMixin from '@/assets/js/mixins/IntersectionMixin.js';

export default {
	mixins: [IntersectionMixin],
	components: {
		ArrowLine,
		FirstDisplayBackground,
		FirstDisplayDescription,
		FirstDisplayTitle
	},

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
		height: calc(var(--row) + var(--gutter));
		min-height: 85px;
	}
}

/* transition for description block */
</style>
