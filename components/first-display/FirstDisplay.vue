<template>
	<section class="first-display">
		<div class="background">
			<div class="mountains" />
			<div class="clouds">
				<img
					src="/img/first-display/clouds.png"
					alt="белые облока"
					class="clouds__item"
				/>
				<img
					src="/img/first-display/clouds.png"
					alt="белые облока"
					class="clouds__item"
				/>
			</div>
		</div>
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

		& .mountains {
			width: 100%;
			height: 100vh;
			background-image: url('~@/assets/img/first-display/mountains.png');
			background-repeat: no-repeat;
			background-size: cover;
		}

		& .clouds {
			position: absolute;
			top: 0;
			left: 0;
			overflow: hidden;
		}
	} /* end - background images*/
}
</style>
