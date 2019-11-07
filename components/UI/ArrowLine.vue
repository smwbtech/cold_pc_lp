<template>
	<div
		:class="['line', xAxis, isVisible ? 'visible' : '']"
		:style="styleObj"
	/>
</template>

<script>
export default {
	props: {
		isVisible: {
			type: Boolean,
			default: false
		},
		backgroudColor: {
			type: String,
			default: '#fff'
		},
		xAxis: {
			type: String,
			default: 'left'
		}
	},

	computed: {
		styleObj() {
			return {
				backgroundColor: this.backgroudColor
			};
		}
	}
};
</script>

<style scoped>
.line {
	position: absolute;
	top: var(--row);
	z-index: 5;
	height: calc(100vh - (var(--row) * 2));
	width: 5px;
	transform-origin: top center;
	transform: scaleY(0);
	transition: transform 0.5s ease-in;

	&.left {
		left: calc(var(--column) + var(--side-padding));
	}

	&.right {
		right: calc(var(--column) + var(--side-padding));
	}

	&:before,
	&:after {
		content: '';
		display: block;
		position: absolute;
		width: 5px;
		height: 40px;
		background-color: inherit;
		bottom: -40px;
		transform-origin: bottom center;
		transform: rotate(0deg);
		transition: transform 0.3s ease-out;
		transition-delay: 0.6s;
	}

	/* modificator for visible line */
	&.visible {
		transform: scaleY(1);

		&:before {
			transform: rotate(-45deg) translateX(1.5px);
		}

		&:after {
			transform: rotate(45deg) translateX(-1.5px);
		}
	}
}
</style>
