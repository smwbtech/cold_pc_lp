<template>
	<section v-observe-visibility="visibilityChanged" class="first-display">
		<ArrowLine :is-visible="showLine" />
		<FirstDisplayTitle :is-visible="isVisible" :show-list="showList" />
		<FirstDisplayDescription :show-description="showDescription" />
		<!-- bacground with animated clouds -->
		<FirstDisplayBackground />
		<!-- end - bacground with animated clouds -->
	</section>
</template>

<script>
import FirstDisplayBackground from './FirstDisplayBackground.vue';
import FirstDisplayTitle from './FirstDisplayTitle.vue';
import FirstDisplayDescription from './FirstDisplayDescription.vue';
import ArrowLine from '@/components/UI/ArrowLine.vue';

export default {
	components: {
		ArrowLine,
		FirstDisplayBackground,
		FirstDisplayDescription,
		FirstDisplayTitle
	},

	data() {
		return {
			isVisible: false,
			showLine: false,
			showList: false,
			showDescription: false
		};
	},

	mounted() {
		setTimeout(() => (this.showLine = true), 300);
		setTimeout(() => (this.showList = true), 600);
		setTimeout(() => (this.showDescription = true), 1500);
	},

	methods: {
		visibilityChanged(isVisible, entry) {
			this.isVisible = isVisible;
			console.log(entry);
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

	/* block with title and applications list */
	& .title-block {
		position: relative;
		z-index: 20;
		display: flex;
		flex-flow: column;
		justify-content: center;
		width: calc(var(--column) * 9 + var(--gutter) * 8);
		margin-left: calc(var(--column) * 2 + var(--gutter) * 2);
		text-align: left;
		color: #fff;

		& h1 {
			font-family: 'Intro', sans-serif;
		}

		& ul {
			list-style: none;
			margin: 0;
			padding: 0;
			font-weight: 500;
			font-size: 1.2em;
			opacity: 0;

			&.visible {
				opacity: 1;
			}

			& li {
				position: relative;
				margin-bottom: var(--gutter);
				transition: opacity 0.3s ease-in;

				& span {
					position: relative;
					z-index: 10;
				}

				&:before {
					content: '';
					display: block;
					position: absolute;
					z-index: 9;
					height: 100%;
					width: 15px;
					background-color: var(--orange);
					transform-origin: center;
					transform: rotate(45deg);
				}
			}
		}
	} /* end - block with title and applications list */
}

/* Animations and transitions */

/* transitions for h1 */
.header-enter {
	transform: translateY(-20px);
	opacity: 0;
}

.header-enter-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}
/* end - transitions for h1 */

/* transition for description block */
</style>
