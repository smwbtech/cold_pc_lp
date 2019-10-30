<template>
	<section class="first-display">
		<!-- bacground with animated clouds -->
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
		<!-- end - bacground with animated clouds -->
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
.first-display {
	display: flex;
	width: 100%;
	min-height: 100vh;

	/* background images */

	& .background {
		position: relative;
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
			overflow: hidden;

			& .clouds__item {
				width: 100vw;

				&.first {
					animation: clouds-first 48s linear infinite;
				}

				&.second {
					animation: clouds-second 48s linear infinite;
				}
			}
		}
	} /* end - background images*/
}

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
