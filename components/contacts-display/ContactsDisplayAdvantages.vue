<template>
	<div class="advantages">
		<h2>почему IEI?</h2>
		<ul>
			<li v-for="(item, index) in advantages" :key="`${index}-adv`">
				<img :src="item.icon" :alt="item.text" />
				<span>{{ item.text }}</span>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
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
			}

			& span {
				padding-left: calc(var(--column) + var(--gutter));
			}
		}
	}
}
</style>
