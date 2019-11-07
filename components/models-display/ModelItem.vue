<template>
	<client-only>
		<parallax-container
			class="model"
			@click.native="$emit('show-modal', modelId)"
		>
			<parallax-element
				class="model__decore-border"
				tag="div"
				:type="'depth'"
				:parallax-strength="-20"
			/>
			<parallax-element
				class="model__decore-orange"
				tag="div"
				:type="'depth'"
				:parallax-strength="-20"
			/>
			<parallax-element
				class="model__preview"
				:type="'depth'"
				:parallax-strength="20"
				tag="img"
				:src="modelPreview"
			/>
			<parallax-element
				class="model__name"
				tag="p"
				:type="'depth'"
				:parallax-strength="20"
				>{{ modelName }}</parallax-element
			>
		</parallax-container>
	</client-only>
</template>
<script>
export default {
	props: {
		modelId: {
			type: Number
		},
		modelPreview: {
			type: String
		},
		modelName: {
			type: String
		}
	}
};
</script>
<style scoped>
.model {
	position: relative;
	width: calc(var(--column) * 4 + var(--gutter) * 3);
	height: calc(var(--column) * 4 + var(--gutter) * 3);
	margin: 40px calc(var(--column) / 2);
	display: flex;
	flex-flow: column;
	align-items: center;
	cursor: pointer;

	& .model__decore-orange {
		position: absolute;
		z-index: 2;
		top: 15%;
		left: 15%;
		width: 70%;
		height: 70%;
		transform-origin: center center;
		box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.5);
		transform: rotate(45deg);
		background-color: var(--orange);
	}

	& .model__decore-border {
		position: absolute;
		z-index: 1;
		top: 10%;
		left: 10%;
		width: 80%;
		height: 80%;
		border: 5px solid rgba(255, 255, 255, 0.5);
	}

	& .model__preview {
		position: relative;
		z-index: 3;
		width: 80%;
		height: 100%;
		margin: 0 auto;
	}

	& .model__name {
		position: relative;
		z-index: 3;
		font-family: 'Intro', sans-serif;
		color: #fff;
		text-align: center;
		font-size: 1.2em;
		margin: 0;
	}
}
</style>
