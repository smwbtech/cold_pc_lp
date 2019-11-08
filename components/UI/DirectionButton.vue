<template>
	<button @click="$emit('click')">
		<img
			src="/img/first-display/arrow.svg"
			:style="iconStyles"
			alt="стрелка"
		/>
	</button>
</template>

<script>
export default {};
</script>

<script>
export default {
	props: {
		direction: {
			type: String,
			default: 'down'
		}
	},

	computed: {
		iconStyles() {
			switch (this.direction) {
				case 'down':
					return { transform: `rotate(${0}deg)` };
				case 'up':
					return { transform: `rotate(${-90}deg)` };
				case 'right':
					return { transform: `rotate(${-90}deg)` };
				case 'left':
					return { transform: `rotate(${90}deg)` };
			}
		}
	}
};
</script>

<style scoped>
button {
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--orange);
	border: none;
	width: var(--column);
	height: var(--column);
	cursor: pointer;
}

/* tablets */
@media (width <= 1200px) {
	button {
		width: var(--m-column);
		height: var(--m-column);
	}
}
</style>
