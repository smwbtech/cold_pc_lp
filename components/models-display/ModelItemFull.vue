<template>
	<transition name="model">
		<div v-if="show" class="model">
			<DirectionButton
				class="close-btn"
				:direction="'right'"
				@click="$emit('close-modal')"
			/>
			<div class="preview">
				<transition name="preview">
					<img
						v-show="showPreview"
						class="preview__img"
						:src="model.previewPhoto.value"
						:alt="model.name"
					/>
				</transition>
				<transition name="background">
					<img
						v-show="showBackground"
						class="preview__bg"
						src="/img/models-display/ice.png"
						alt="лед"
					/>
				</transition>
			</div>
			<div class="description">
				<div class="desctiption-title">
					<h1>{{ model.name }}</h1>
					<a :href="model.url" target="_blank">в каталог</a>
				</div>
				<div
					class="description-text"
					v-html="model.description.value"
				/>
				<div class="features">
					<h2>Характеристики</h2>
					<vue-scroll>
						<ul class="features-list">
							<li
								v-for="(feature, index) in features"
								:key="`${index}-feature`"
								class="features-list-item"
							>
								<span class="name">{{ feature.name }}</span>
								<span class="value">{{ feature.value }}</span>
							</li>
						</ul>
					</vue-scroll>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import DirectionButton from '@/components/UI/DirectionButton.vue';
export default {
	components: {
		DirectionButton
	},
	props: {
		show: {
			type: Boolean,
			default: false
		},
		model: {
			type: Object
		}
	},

	data() {
		return {
			showPreview: false,
			showBackground: false
		};
	},

	computed: {
		features() {
			const engFields = {
				'i18n::field-brightness': 'Яркость',
				'i18n::field-cvet_korpusa': 'Цвет корпуса'
			};
			let features = Object.entries(this.model.features).map((v) => {
				if (v[0] !== 'photos') {
					const name = engFields[v[1].name]
						? engFields[v[1].name]
						: v[1].name;
					const value = Array.isArray(v[1].value)
						? v[1].value.join(',').trim()
						: v[1].value.trim();
					return { name, value };
				}
			});
			features = features.filter((v) => v.name !== 'i18n::field-type');
			return features;
		}
	},

	watch: {
		show(val, oldVal) {
			if (val) {
				setTimeout(() => {
					this.showPreview = true;
					this.showBackground = true;
				}, 600);
			} else {
				setTimeout(() => {
					this.showPreview = false;
					this.showBackground = false;
				}, 600);
			}
		}
	}
};
</script>
<style scoped>
.model {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 1000;
	background: linear-gradient(var(--blue), var(--dark-blue));
	display: flex;
	height: 100%;
	width: 100vw;
	padding: 0px
		calc(var(--side-padding) + var(--column) * 1 + var(--gutter) * 1);

	& .close-btn {
		position: absolute;
		z-index: 10;
		right: 0;
		top: 0;
	}

	& .preview {
		position: relative;
		display: flex;
		align-items: center;
		width: 50%;

		& .preview__img {
			position: relative;
			z-index: 2;
			width: calc(var(--column) * 6 + var(--gutter) * 5);
			margin-left: var(--column);
		}

		& .preview__bg {
			position: absolute;
			z-index: 1;
			width: 100%;
		}
	}

	& .description {
		width: 50%;
		position: relative;
		color: #fff;
		align-items: center;
		display: flex;
		flex-flow: column;
		justify-content: center;

		& .desctiption-title {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: 'Intro', sans-serif;

			& a {
				color: #fff;
				background-color: var(--orange);
				padding: 5px;
				text-decoration: none;
			}
		}

		& .features {
			width: 100%;
			height: 60vh;

			& .features-list {
				list-style: none;
				padding: 0;
				margin: 0;
				padding-bottom: 40px;

				& .features-list-item {
					display: flex;
					justify-content: space-between;
					width: 100%;
					padding-right: 40px;
					margin: 20px 0px;

					& .value {
						font-weight: 300;
					}
				}
			}
		}
	}
}

.model-enter,
.model-leave-to {
	transform: translateX(100%);
}

.model-enter-active,
.model-leave-active {
	transition: transform 0.6s ease-in-out;
}

/* Transitions and animations */

.preview-enter,
.background-enter {
	opacity: 0;
	transform: translateX(20px);
}

.preview-enter-active,
.background-enter-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}
.preview-enter-active {
	transition-delay: 0.3s;
}

@media (width < 1366px) {
	.model {
		& .description {
			& .features {
				font-size: 0.7em;
				height: 40vh;
			}
		}
	}
}

@media (width < 1200px) {
	.model {
		flex-flow: column;
		overflow-y: scroll;

		& .preview {
			order: 2;
			margin-top: 50px;
			justify-content: center;
			width: 100%;
			& .preview__img {
				min-width: 300px;
				height: auto;
			}
			& .preview__bg {
				width: auto;
				height: 100%;
				z-index: 10;
				opacity: 0.7;
			}
		}

		& .description {
			padding-top: 100px;
			order: 1;
			width: 100%;
			margin-bottom: 40px;
		}
	}
}

@media (width < 768px) {
	.model {
		padding: 0 var(--m-gutter);

		& .description {
			& .desctiption-title {
				font-size: 0.6em;
			}

			& .description-text {
				font-weight: 300;
				font-size: 0.8em;
				text-align: justify;
			}
		}
	}
}
</style>
