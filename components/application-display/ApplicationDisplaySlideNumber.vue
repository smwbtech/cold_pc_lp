<template>
	<p class="slide-number">
		<transition :name="name" mode="out-in">
			<span v-if="show" class="slide-number__current">{{
				index + 1
			}}</span>
		</transition>
	</p>
</template>
<script>
export default {
	props: {
		index: {
			type: Number
		},
		transitionName: {
			type: String,
			default: 'inc'
		},
		show: {
			type: Boolean
		}
	},

	computed: {
		name() {
			return `number-${this.transitionName}`;
		}
	}
};
</script>
<style scoped>
.slide-number {
	position: absolute;
	z-index: 5;
	top: 20px;
	left: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	background-color: var(--orange);
	width: var(--column);
	height: var(--column);
	color: #fff;
	font-family: 'Intro', sans-serif;
	font-size: 1.4em;
}

/* Transitions and animations */
.number-inc-enter,
.number-dec-leave-to {
	transform: translateY(-20px) scale(0.6);
	opacity: 0;
}

.number-inc-leave-to,
.number-dec-enter {
	transform: translateY(20px) scale(0.6);
	opacity: 0;
}

.number-inc-enter-active,
.number-dec-enter-active,
.number-inc-leave-active,
.number-dec-leave-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}

@media (width < 1366px) {
	.slide-number {
		width: calc(var(--column) + var(--gutter));
		height: calc(var(--column) + var(--gutter));
	}
}

/* tablets */
@media (width < 1200px) {
	.slide-number {
		width: var(--m-column);
		height: var(--m-column);
	}
}

/* small desctop displays */
@media (width < 768px) {
	.slide-number {
		top: 0;
		left: 0;
		width: calc(var(--m-column) * 2 + var(--m-gutter));
		height: calc(var(--m-column) * 2 + var(--m-gutter));
	}
}
</style>
