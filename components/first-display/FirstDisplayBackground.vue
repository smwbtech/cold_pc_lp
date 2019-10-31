<template>
	<div class="background">
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
	// data() {
	// 	return {
	// 		numberOfImages: 4,
	// 		imagesLoaded: 0,
	// 		images: ['']
	// 	};
	// },
	// beforeCreate() {
	// 	if(process.client) {
	// 		const background = new Image();
	// 	}
	// },
	// methods: {
	// 	imgLoadedHandler() {
	// 		this.imagesLoaded++;
	// 		if (this.imagesLoaded === this.numberOfImages)
	// 			this.$emit('backround-loaded');
	// 	},
	// 	/**
	// 	 * preload backgeound images,
	// 	 * invoke imgLoadedHandler when image loaded
	// 	 * @param {string} src - source for image
	// 	 *
	// 	 */
	// 	preloadImages(src) {
	// 		const img = new Image();
	// 		img.src = src;
	// 		img.addEventListener('load', imgLoadedHandler);
	// 	}
	// }
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
	background-image: url('~@/assets/img/first-display/bg.jpg');
	background-repeat: no-repeat;
	background-size: cover;

	&:before {
		content: '';
		display: block;
		position: absolute;
		z-index: 4;
		width: 100%;
		height: 100vh;
		background-color: var(--bg-mask);
	}

	& .mountains {
		width: 100%;
		height: 100vh;
		position: relative;
		z-index: 3;
		background-image: url('~@/assets/img/first-display/mountains.png');
		background-repeat: no-repeat;
		background-size: cover;
	}

	& .clouds {
		position: absolute;
		z-index: 2;
		display: flex;
		top: 0;
		left: 0;
		width: 100%;
		overflow: hidden;

		& .clouds__item {
			width: 100vw;

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
		opacity: 0;
	}
	52% {
		transform: translateX(-200%);
		opacity: 0;
	}
	52.5% {
		transform: translateX(-200%);
		opacity: 1;
	}
	100% {
		transform: translateX(-100%);
	}
}
</style>
