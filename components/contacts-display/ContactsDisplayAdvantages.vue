<template>
	<div class="advantages">
		<h2>почему IEI?</h2>
		<ul>
			<li v-for="(item, index) in advantages" :key="`${index}-adv`">
				<img
					:src="item.icon"
					:alt="item.text"
					:class="[visible ? 'visible' : '']"
				/>
				<span :class="[visible ? 'visible' : '']">{{ item.text }}</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			visible: false,
			advantages: [
				{
					text:
						'качественное тестирование и выходной контроль каждого устройства',
					icon: '/img/contacts-display/recommended.svg'
				},
				{
					text:
						'высокая производительность в компактном форма-факторе',
					icon: '/img/contacts-display/analysis.svg'
				},
				{
					text: 'техническая поддержка и сервис центр в России',
					icon: '/img/contacts-display/customer-service.svg'
				},
				{
					text: 'удобный монтаж и обслуживание',
					icon: '/img/contacts-display/auction.svg'
				}
			]
		};
	},
	watch: {
		show(val, oldVal) {
			if (val) this.visible = val;
		}
	}
};
</script>
<style scoped>
.advantages {
	width: calc(var(--column) * 8 + var(--gutter) * 7);

	& h2 {
		font-family: 'Intro', sans-serif;
		color: #fff;
		margin-top: 0;
		margin-bottom: var(--column);
	}

	& ul {
		color: #fff;
		list-style: none;

		& li {
			display: flex;
			align-items: center;
			margin-bottom: var(--row);

			& img {
				width: var(--column);
				transform: rotate(-45deg);
				opacity: 0;
				transition: opacity 0.3s ease-in, transform 0.3s ease-out;
				transition-delay: 0.3s;

				&.visible {
					transform: rotate(0deg);
					opacity: 1;
				}
			}

			& span {
				padding-left: calc(var(--column) + var(--gutter));
				opacity: 0;
				transform: translateY(-20px);
				transition: opacity 0.3s ease-in, transform 0.3s ease-out;
				transition-delay: 0.3s;

				&.visible {
					transform: translateY(0);
					opacity: 1;
				}
			}
		}
	}
}

@media (width < 768px) {
	.advantages {
		width: 100%;
		font-weight: 300;
		font-size: 0.8em;

		& h2 {
			text-align: center;
			margin: 20px 0px;
		}

		& ul {
			padding: 0;
			& li {
				& img {
					width: 30px;
				}
			}
		}
	}
}
</style>
