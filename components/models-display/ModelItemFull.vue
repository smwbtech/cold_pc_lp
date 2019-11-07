<template>
	<transition name="model">
		<div v-if="show" class="model">
			<DirectionButton
				class="close-btn"
				:direction="'right'"
				@click="$emit('close-modal')"
			/>
			<div class="preview">
				<img
					class="preview__img"
					:src="model.previewPhoto.value"
					:alt="model.name"
				/>
				<img
					class="preview__bg"
					src="/img/models-display/ice.png"
					alt="лед"
				/>
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
	computed: {
		features() {
			const engFields = {
				'i18n::field-brightness': 'Яркость',
				'i18n::field-cvet_korpusa': 'Цвет корпуса'
			};
			const features = Object.entries(this.model.features).map((v) => {
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
			return features;
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
			overflow-y: hidden;

			& .features-list {
				list-style: none;
				padding: 0;
				margin: 0;

				& .features-list-item {
					display: flex;
					justify-content: space-between;
					width: 100%;
					padding-right: 40px;
					margin: 20px 0px;
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
</style>
