<template>
	<div :class="['background', isVisible ? '' : 'dark']">
		<div class="mountains" />
		<div class="clouds">
			<img
				src="/img/first-display/clouds.png"
				alt="белые облока"
				class="clouds__item first"
			/>
			<img
				src="/img/first-display/clouds.png"
				alt="белые облока"
				class="clouds__item second"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		isVisible: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
			imagesLoaded: 0,
			images: [
				'/img/first-display/clouds.png',
				'/img/first-display/bg.jpg',
				'/img/first-display/mountains.png'
			]
		};
	},

	created() {
		if (process.client) {
			for (const src of this.images) {
				this.preloadImages(src);
			}
		}
	},

	methods: {
		/**
		 * count preloaded images and emit background-loaded event
		 * when all images are ready
		 * @returns {undefined}
		 */
		imgLoadedHandler() {
			this.imagesLoaded++;
			if (this.imagesLoaded === this.images.length)
				this.$emit('backround-loaded');
		},
		/**
		 * preload backgeound images,
		 * invoke imgLoadedHandler when image loaded
		 * @param {string} src - source for image
		 * @returns {undefined}
		 *
		 */
		preloadImages(src) {
			const img = new Image();
			img.src = src;
			img.addEventListener('load', this.imgLoadedHandler, { once: true });
		}
	}
};
</script>

<style scoped>
/* background images*/
.background {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100vh;
	background-image: url('/img/first-display/bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	&:before {
		content: '';
		display: block;
		position: absolute;
		z-index: 4;
		width: 100%;
		height: 100vh;
		background-color: var(--dark-blue);
		opacity: 0.3;
		transition: opacity 0.3s ease-out;
	}

	&.dark {
		&:before {
			opacity: 0.6;
		}
	}

	& .mountains {
		width: 100%;
		height: 100vh;
		position: relative;
		z-index: 3;
		background-image: url('/img/first-display/mountains.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	& .clouds {
		position: absolute;
		z-index: 2;
		display: flex;
		top: 0;
		left: 0;
		min-width: 100%;
		overflow: hidden;

		& .clouds__item {
			&.first {
				animation: clouds-first 60s linear infinite;
			}

			&.second {
				animation: clouds-second 60s linear infinite;
			}
		}
	}
} /* end - background images*/

/* Animations and transitions */
@keyframes clouds-first {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(100%);
	}
}

@keyframes clouds-second {
	0% {
		transform: translateX(-100%);
	}
	50% {
		transform: translateX(0%);
	}
	51.5% {
		transform: translateX(0%);
		visibility: hidden;
	}
	52% {
		transform: translateX(-200%);
		visibility: hidden;
	}
	52.5% {
		transform: translateX(-200%);
		visibility: visible;
	}
	100% {
		transform: translateX(-100%);
	}
}

/* tablets */
@media (width < 1200px) {
	.background {
		overflow: hidden;
	}
}
</style>
