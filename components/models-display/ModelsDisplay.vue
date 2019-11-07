<template>
	<section class="models">
		<ArrowLine :is-visible="isVisible" />
		<div class="models-list">
			<ModelItem
				v-for="model in models"
				:key="model.id"
				:model-id="model.id"
				:model-preview="model.previewPhoto.value"
				:model-name="model.name"
				@show-modal="showModelInfo"
			/>
		</div>
		<ModelFullView
			:show="showModal"
			:model="currentModel"
			@close-modal="closeModelInfo"
		/>
	</section>
</template>
<script>
import ModelItem from './ModelItem.vue';
import ModelFullView from './ModelItemFull.vue';
import ArrowLine from '@/components/UI/ArrowLine.vue';
import IntersectionMixin from '@/assets/js/mixins/IntersectionMixin.js';
export default {
	components: {
		ArrowLine,
		ModelItem,
		ModelFullView
	},
	mixins: [IntersectionMixin],
	data() {
		return {
			sectionName: 'модели',
			isVisible: false,
			intersectionOptions: {
				threshold: 0.3
			},
			showModal: false,
			currentModel: null
		};
	},
	computed: {
		models() {
			return this.$store.state.models;
		}
	},
	mounted() {
		console.log(this.$store.state.models);
	},
	methods: {
		showModelInfo(id) {
			this.currentModel = this.models.find((v) => v.id === id);
			this.showModal = true;
			if (process.client) {
				document.querySelector('body').classList.add('hide-scroll');
			}
		},
		closeModelInfo() {
			this.currentModel = null;
			this.showModal = false;
			if (process.client) {
				document.querySelector('body').classList.remove('hide-scroll');
			}
		}
	}
};
</script>
<style scoped>
.models {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-height: 100vh;

	&:before {
		position: absolute;
		z-index: 3;
		top: 0;
		left: 0;
		content: '';
		display: block;
		width: 100%;
		height: 10vh;
		background-image: url('/img/models-display/decore.png');
		background-size: cover;
	}

	& .models-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		width: calc(var(--column) * 20 + var(--gutter) * 19);
	}
}
</style>
