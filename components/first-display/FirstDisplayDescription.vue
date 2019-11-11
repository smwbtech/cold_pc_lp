<template>
	<div class="description-block">
		<transition name="description">
			<div v-if="showDescription" class="description-block__text">
				<div class="text">
					<h2>
						Где другие даже не включаются, мы продолжаем работать
					</h2>
					<p>
						Инженеры компании IEI Integration, используя свой
						богатый опыт внедрения проектов на территории РФ, сумели
						создать промышленные платы для работы в
						низкотемпературных условиях, не имеющие аналогов в мире.
						Данные платы уже пользуются большой популярностью в
						районах крайнего Севера. Они привлекают своей
						надёжностью и гибкими возможностями. Рабочий диапазон
						плат -40 +85. Платы IEI доступны в форм-факторах 3,5”,
						EPIC NANO, PC/104.
					</p>
					<div
						class="next-screen"
						@click.prevent="scrollTo('.application')"
					>
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
	},

	methods: {
		scrollTo(selector) {
			document
				.querySelector(selector)
				.scrollIntoView({ behavior: 'smooth' });
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
	margin-right: calc(
		var(--side-padding) + var(--column) * 2 + var(--gutter) * 2
	);
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
				text-align: center;
				font-size: 1.2em;
				margin: 0;
				padding: 10px;

				&:after {
					position: absolute;
					bottom: -15px;
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

/* small desktop displays */
@media (1200px <= width < 1600px) {
	.description-block {
		& .description-block__text {
			width: calc(var(--column) * 8 + var(--gutter) * 7);
			height: calc(var(--column) * 8 + var(--gutter) * 7);

			&:before,
			&:after {
				width: calc(var(--column) * 8 + var(--gutter) * 7);
				height: calc(var(--column) * 8 + var(--gutter) * 7);
			}

			& .text {
				text-align: center;
				width: calc(var(--column) * 8 + var(--gutter) * 7);
				height: calc(var(--column) * 8 + var(--gutter) * 7);

				& h2 {
					&:after {
						bottom: -5px;
					}
				}

				& p {
					line-height: 1.4;
					font-size: 1em;
				}

				& .next-screen {
					& p {
						width: 100%;
						padding: 0;
						text-align: center;
					}
				}
			}
		}
	}
}

/* tablet */
@media (width < 1200px) {
	.description-block {
		justify-content: flex-start;
		width: 100%;
		margin-left: calc(var(--m-column) + var(--m-gutter));

		& .description-block__text {
			width: calc(var(--m-column) * 6 + var(--m-gutter) * 5);
			height: calc(var(--m-column) * 6 + var(--m-gutter) * 5);

			&:before,
			&:after {
				width: calc(var(--m-column) * 6 + var(--m-gutter) * 5);
				height: calc(var(--m-column) * 6 + var(--m-gutter) * 5);
			}

			& .text {
				width: 100%;
				height: 100%;
				text-align: center;

				& h2 {
					&:after {
						bottom: -5px;
					}
				}

				& .next-screen {
					& p {
						padding: 0;
						width: 100%;
						text-align: center;
					}
				}
			}
		}
	}
}

/* Old ipad landscape */
@media (width <= 1024px) and (orientation: landscape) {
	.description-block {
		& .description-block__text {
			width: calc(var(--m-column) * 4 + var(--m-gutter) * 3);
			height: calc(var(--m-column) * 4 + var(--m-gutter) * 3);

			&:before,
			&:after {
				width: calc(var(--m-column) * 4 + var(--m-gutter) * 3);
				height: calc(var(--m-column) * 4 + var(--m-gutter) * 3);
			}
		}
	}
}

/* mobile phones */
@media (width < 768px) {
	.description-block {
		display: none;
	}
}
</style>
