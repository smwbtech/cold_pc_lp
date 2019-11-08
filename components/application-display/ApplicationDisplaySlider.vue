<template>
	<div class="slider">
		<!-- Number of slide -->
		<ApplicationSlideNumber
			:index="index"
			:show="showSlide"
			:transition-name="transitionName"
		/>
		<!-- Slide element -->
		<ApplicationSlide
			:index="index"
			:show-slide="showSlide"
			:transition-name="transitionName"
		/>
		<!-- Controls for slider -->
		<div class="controls">
			<DirectionButton :direction="'left'" @click="clickHandler(-1)" />
			<DirectionButton :direction="'right'" @click="clickHandler(1)" />
		</div>
		<!-- Decore -->
		<client-only>
			<transition name="decore-left">
				<parallax-container v-show="isVisible" class="decore-btm-lft">
					<parallax-element
						class="decore-btm-lft__item"
						:type="'depth'"
						:parallax-strength="-20"
						tag="img"
						:src="'/img/application-display/decore-bottom-left.png'"
					/>
				</parallax-container>
			</transition>
			<transition name="decore-right">
				<parallax-container v-show="isVisible" class="decore-top-rt">
					<parallax-element
						class="decore-top-rt__item"
						:type="'depth'"
						:parallax-strength="-20"
						tag="img"
						:src="'/img/application-display/decore-top-right.png'"
					/>
				</parallax-container>
			</transition>
		</client-only>
	</div>
</template>

<script>
import ApplicationSlide from './ApplicationDisplaySlide.vue';
import ApplicationSlideNumber from './ApplicationDisplaySlideNumber.vue';
import DirectionButton from '@/components/UI/DirectionButton.vue';

export default {
	components: {
		ApplicationSlide,
		DirectionButton,
		ApplicationSlideNumber
	},

	props: {
		isVisible: {
			type: Boolean
		}
	},

	data() {
		return {
			index: 0,
			slidesLength: 3,
			showSlide: true,
			transitionName: 'inc',
			delay: 300,
			intervalId: null,
			timeoutId: null
		};
	},

	watch: {
		isVisible(val, oldVal) {
			if (val) {
				this.intervalId = setInterval(() => {
					this.changeSlide(1);
				}, 8000);
			} else {
				clearInterval(this.intervalId);
			}
		}
	},

	methods: {
		clickHandler(n) {
			clearInterval(this.intervalId);
			clearTimeout(this.timeoutId);
			this.changeSlide(n);
			this.timeoutId = setTimeout(
				(this.intervalId = setInterval(
					() => this.changeSlide(1),
					8000
				)),
				10000
			);
		},

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
		z-index: 2;
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
		z-index: 2;
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
		width: calc(var(--column) * 3 + var(--gutter) * 2);

		& .decore-top-rt__item {
			max-width: 100%;
		}
	}
}

/* Animations and transitions */
.decore-left-enter,
.decore-left-leave-to {
	transform: translateX(-20px) scale(0.7);
	opacity: 0;
}

.decore-right-enter,
.decore-right-leave-to {
	transform: translateX(20px) scale(0.7);
	opacity: 0;
}

.decore-left-enter-active,
.decore-left-leave-active,
.decore-right-enter-active,
.decore-right-leave-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
	transition-delay: 0.5s;
}

/* small desctop displays */
@media (width <= 1366px) {
	.slider {
		height: 80vh;
	}
}

/* tablets */
@media (width < 1200px) {
	.slider {
		& .decore-top-rt,
		& .decore-btm-lft {
			width: calc(var(--m-column) * 3 + var(--m-gutter) * 2);
		}
	}
}

/* mobile phones */
@media (width < 768px) {
	.slider {
		width: 100%;
		min-height: 100vh;

		& .controls {
			width: 100%;
			bottom: 0px;
			left: 0px;
			justify-content: center;
			z-index: 3;
		}

		& .decore-btm-lft {
			bottom: 0;
			left: 0;
		}

		& .decore-top-rt {
			top: 0;
			right: 0;
			z-index: 20;
		}
	}
}
</style>
