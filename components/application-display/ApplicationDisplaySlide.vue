<template>
	<div class="slide">
		<transition name="image" mode="out-in">
			<img
				v-if="showSlide && imageLoaded"
				:src="`/img/application-display/${image}`"
				:alt="title"
				class="slide__illustration"
			/>
		</transition>
		<transition :name="textTransitionName" mode="out-in">
			<div v-if="showSlide && imageLoaded" class="slide__text">
				<h3 :class="activeTitle ? 'active' : ''">
					<span>{{ title }}</span>
				</h3>
				<p>{{ text }}</p>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			default: 0
		},
		showSlide: {
			type: Boolean
		},
		transitionName: {
			type: String,
			default: 'inc'
		}
	},

	data() {
		return {
			imageLoaded: false,
			activeTitle: false,
			slides: [
				{
					title: 'система видеонаблюдения за нефтепроводом',
					text: `На крайнем севере и на шельфе морей Северного Ледовитого океана сосредоточены колоссальные природные ресурсы, обслуживания которых требуют особого внимания. Компания IEI предлагает проверенные решения для подобных климатических зон, разработав специализированные промышленные платы. Данные устройства устойчивы к отрицательным температурам (до -40С), способны сохранять функциональность при круглогодичной эксплуатации. 
					Высокоточная механическая обработка, правильно подобранные материалы и компоненты исключают зависания электроники, что позволяет встраиваемым платам IEI широко применяться в подобных условиях.`,
					img: 'nefteprovod.jpg'
				},
				{
					title: 'система контроля и управления доступом (СКУД)',
					text:
						'Там, где цена ошибки крайне высока, компания IEI предлагает встраиваемые платы промышленного класса для осуществления контроля доступа на территорию при низкотемпературных условиях эксплуатации. Для управления периферией и мониторинга проезда автотранспорта через ворота - отлично подойдут промышленные платы от IEI. Каждая выпущенная плата проходит тщательные климатические испытания. Все используемые материалы и компоненты плат соответствуют мировым стандартам качества, что делает платы IEI неуязвимыми.',
					img: 'skud.jpg'
				},
				{
					title: 'платёжные терминалы',
					text:
						'Промышленные встраиваемые платы IEI благодаря широкому рабочему диапазону могут быть использованы как CPU платёжных терминалов. Самое главное отличие данных плат от других – это способность работать без перебоев при перепадах температур (-40;+85°C). Пройдя боевое крещение в районах крайнего Севера, промышленные платы IEI широко пользуются спросом на объектах подобного типа.  Высокая производительность и удобство монтажа позволяют быстро и надёжно смонтировать их прямо на объекте в терминалах любой сложности.',
					img: 'atm.jpg'
				}
			]
		};
	},

	computed: {
		title() {
			return this.slides[this.index].title;
		},
		text() {
			return this.slides[this.index].text;
		},
		image() {
			return this.slides[this.index].img;
		},
		textTransitionName() {
			return `text-${this.transitionName}`;
		}
	},

	watch: {
		showSlide(val, oldVal) {
			if (!val) {
				this.imageLoaded = false;
				this.activeTitle = false;
				this.imageLoadedHandler(
					`/img/application-display/${this.image}`
				);
			}
		}
	},

	mounted() {
		if (this.showSlide) {
			this.imageLoaded = true;
			this.activeTitle = true;
		}
	},

	methods: {
		imageLoadedHandler(src) {
			const img = new Image();
			img.src = src;
			img.addEventListener(
				'load',
				() => {
					this.imageLoaded = true;
				},
				{ once: true }
			);
		}
	}
};
</script>
<style scoped>
.slide {
	display: flex;
	justify-content: scpace-between;
	align-items: center;
	overflow: hidden;

	& .slide__illustration {
		width: auto;
		height: 100%;
	}

	& .slide__text {
		padding-right: calc(var(--column) * 2 + var(--gutter));

		& h3 {
			position: relative;

			& span {
				position: relative;
				z-index: 2;
			}

			&:before {
				content: '';
				display: block;
				position: absolute;
				z-index: 0;
				width: 1em;
				height: 30px;
				background-color: var(--orange);
				transform-origin: center;
				transform: rotate(45deg);
			}
		}

		& p {
			font-weight: 300;
			line-height: 2;
		}
	}
}

/* Transitions and animations */

/* Image */
.image-enter,
.image-leave-to {
	transform: translateX(-20px);
	opacity: 0;
}

.image-enter-active,
.image-leave-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}

/* Text */

.text-inc-enter,
.text-dec-leave-to {
	transform: translateY(-20px);
	opacity: 0;
}

.text-inc-leave-to,
.text-dec-enter {
	transform: translateY(20px);
	opacity: 0;
}

.text-inc-enter-active,
.text-dec-enter-active,
.text-inc-leave-active,
.text-dec-leave-active {
	transition: opacity 0.3s ease-in, transform 0.3s ease-out;
}

/* small desctop displays */
@media (width <= 1366px) {
	.slide {
		& .slide__illustration {
			width: 50%;
			height: auto;
		}

		& .slide__text {
			& h3 {
				&:before {
					width: 1em;
					height: 30px;
				}
			}

			& p {
				line-height: 1.4;
				font-size: 1em;
			}
		}
	}
}

/* tablets */
@media (width < 1200px) {
	.slide {
		& .slide__illustration {
			z-index: 1;
			position: absolute;
			left: 0;
			top: 0;
			width: auto;
			height: 100%;
			opacity: 0.5;
		}

		& .slide__text {
			width: 100%;
			position: relative;
			z-index: 10;
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			padding: 0px 20px;

			& p {
				text-align: justify;
				font-size: 0.9em;
				line-height: 1.4;
				font-weight: 500;
			}
		}
	}
}

/* small desctop displays */
@media (width < 768px) {
	.slide {
		& .slide__text {
			font-size: 0.8em;

			& h3 {
				&:before {
					display: none;
				}
			}
		}
	}
}
</style>
