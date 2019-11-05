<template>
	<div class="slider">
		<!-- Number of slide -->
		<div class="slide__number"></div>
		<!-- Slide element -->
		<ApplicationSlide
			:index="index"
			:showSlide="showSlide"
			:transitionName="transitionName"
		/>
		<!-- Controls for slider -->
		<div class="controls">
			<DirectionButton :direction="'left'" @click="changeSlide(-1)" />
			<DirectionButton :direction="'right'" @click="changeSlide(1)" />
		</div>
		<!-- Decore -->
		<client-only>
			<parallax-container class="decore-btm-lft">
				<parallax-element
					class="decore-btm-lft__item"
					:type="'depth'"
					:parallaxStrength="-20"
					tag="img"
					:src="'/img/application-display/decore-bottom-left.png'"
				/>
			</parallax-container>
			<parallax-container class="decore-top-rt">
				<parallax-element
					class="decore-top-rt__item"
					:type="'depth'"
					:parallaxStrength="-20"
					tag="img"
					:src="'/img/application-display/decore-top-right.png'"
				/>
			</parallax-container>
		</client-only>
	</div>
</template>

<script>
import ApplicationSlide from './ApplicationDisplaySlide.vue';
import DirectionButton from '@/components/UI/DirectionButton.vue';

export default {
	components: {
		ApplicationSlide,
		DirectionButton
	},

	data() {
		return {
			index: 0,
			slidesLength: 3,
			showSlide: true,
			transitionName: 'inc',
			delay: 300
		};
	},

	methods: {
		changeSlide(n) {
			const nextSlide = this.index + n;
			this.transitionName = n > 0 ? 'inc' : 'dec';
			this.slider();
			this.index =
				nextSlide < 0
					? this.slidesLength - 1
					: nextSlide > this.slidesLength - 1
					? 0
					: nextSlide;
		},

		slider() {
			this.showSlide = false;
			setTimeout(() => (this.showSlide = true), this.delay);
		}
	}
};
</script>

<style scoped>
.slider {
	position: relative;
	display: flex;
	height: 776px;
	width: calc(var(--column) * 20 + var(--gutter) * 19);
	border: 10px solid #ced6de;

	& .slide__number {
		position: absolute;
		top: 20px;
		left: 20px;
		background-color: var(--orange);
		color: #fff;
		font-family: 'Intro', sans-serif;
	}

	& .controls {
		position: absolute;
		display: flex;
		right: 20px;
		bottom: 20px;

		& > *:first-child {
			margin-right: 20px;
		}
	}

	& .decore-top-rt,
	& .decore-btm-lft {
		position: absolute;
	}

	& .decore-btm-lft {
		left: -40px;
		bottom: -60px;
		width: calc(var(--column) * 3 + var(--gutter) * 2);

		& .decore-btm-lft__item {
			max-width: 100%;
		}
	}

	& .decore-top-rt {
		top: -10%;
		right: -4%;

		& .decore-top-rt__item {
			max-width: 100%;
		}
	}
}
</style>
