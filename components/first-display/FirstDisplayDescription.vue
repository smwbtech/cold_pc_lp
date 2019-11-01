<template>
	<div class="description-block">
		<transition name="description">
			<div v-if="showDescription" class="description-block__text">
				<div class="text">
					<h2>
						Где другие даже не включаются, мы продолжаем работать
					</h2>
					<p>
						Мы представляем список промышленного компьютерного
						оборудования для работы при экстремально низких
						температурах. Промышленные компьютеры и компоненты
						способные выдержать морозы российского севера и
						способные работать на улице без дополнительного
						подогрева.
					</p>
					<div class="next-screen">
						<DirectionButton />
						<p>читать о решениях</p>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import DirectionButton from '@/components/UI/DirectionButton.vue';

export default {
	components: {
		DirectionButton
	},

	props: {
		showDescription: {
			type: Boolean,
			default: false
		}
	}
};
</script>

<style scoped>
/* description block */
.description-block {
	position: relative;
	z-index: 20;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	width: calc(var(--column) * 9 + var(--gutter) * 8);
	margin-right: calc(var(--column) * 2 + var(--gutter) * 2);
	color: var(--dark-blue);

	& .description-block__text {
		position: relative;
		width: calc(var(--column) * 5 + var(--gutter) * 4);
		height: calc(var(--column) * 5 + var(--gutter) * 4);

		&:before,
		&:after {
			position: absolute;
			left: 0;
			top: 0;
			content: '';
			display: block;
			width: calc(var(--column) * 5 + var(--gutter) * 4);
			height: calc(var(--column) * 5 + var(--gutter) * 4);
		}

		&:before {
			z-index: 10;
			background-color: var(--grey);
		}

		&:after {
			z-index: 9;
			transform: rotate(45deg);
			transform-origin: center center;
			background-color: var(--orange);
			opacity: 0.6;
			transition: transform 0.3s ease-out;
		}

		& .text {
			position: relative;
			z-index: 11;
			width: calc(var(--column) * 5 + var(--gutter) * 4);
			height: calc(var(--column) * 5 + var(--gutter) * 4);
			display: flex;
			flex-flow: column;
			justify-content: space-between;

			& h2 {
				position: relative;
				font-size: 1.2em;
				margin: 0;
				padding: 10px;

				&:after {
					position: absolute;
					bottom: -25px;
					left: calc(
						50% - ((var(--column) * 3 + var(--gutter) * 2) / 2)
					);
					content: '';
					display: block;
					width: calc(var(--column) * 3 + var(--gutter) * 2);
					height: 5px;
					background-color: var(--orange);
				}
			}

			& p {
				margin: 0;
				padding: 10px;
				text-align: justify;
				line-height: 1.4;
				font-weight: 300;
				font-size: 0.9em;
			}

			& .next-screen {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-between;
				cursor: pointer;
				background-color: var(--bg-mask);
				color: var(--dark-blue);
				transition: background-color 0.2s ease-in, color 0.2s ease-out;

				& p {
					font-size: 1.2em;
					width: calc(var(--column) * 4 + var(--gutter) * 3);
					text-align: center;
				}

				&:hover {
					background-color: var(--blue);
					color: #fff;
				}
			}
		}
	}
}
/* end - description block */

.description-enter {
	transform: translateX(20px);
	opacity: 0;

	&.description-block__text:after {
		transform: rotate(0deg);
	}
}

.description-enter-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}
</style>