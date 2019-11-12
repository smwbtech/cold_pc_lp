<template>
	<footer>
		<ul :class="[show ? 'visible' : '']">
			<li v-for="adress in adresses" :key="adress.email">
				<span class="city">{{ adress.city }}</span>
				<a class="phone" :href="`tel:${adress.tel}`">{{
					adress.phone
				}}</a>
				<a class="email" :href="`mailto:${adress.email}`">{{
					adress.email
				}}</a>
			</li>
		</ul>
	</footer>
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
			adresses: [
				{
					city: 'Санкт-Петербург',
					phone: '(812) 326-59-24',
					tel: '+78123265924',
					email: 'ipc@nnz.ru'
				},
				{
					city: 'Москва',
					phone: '(495) 980-64-06',
					tel: '+74959806406',
					email: 'msk@nnz.ru'
				},
				{
					city: 'Екатеринбург',
					phone: '(343) 311-90-07',
					tel: '+73433119007',
					email: 'ekb@nnz-ipc.ru'
				},
				{
					city: 'Новосибирск',
					phone: '(383) 330-05-18',
					tel: '+73833300518',
					email: 'nsk@nnz-ipc.ru'
				},
				{
					city: 'Алматы',
					phone: '(727) 346-97-17',
					tel: '+77273469717',
					email: 'kaz@nnz.ru'
				}
			]
		};
	}
};
</script>
<style scoped>
footer {
	width: 100%;
	padding-top: 20px;

	& ul {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		list-style: none;
		color: #fff;

		&:before,
		&:after {
			content: '';
			position: absolute;
			bottom: -1em;
			left: 0;
			display: block;
			width: 100%;
			height: 3px;
			background-color: rgba(255, 255, 255, 0.7);
			transform-origin: center center;
			transform: scale(0);
			transition: transform 0.3s ease-in 0.3s;
		}

		&:after {
			top: -1em;
		}

		&.visible {
			&:before,
			&:after {
				transform: scale(1);
			}
		}

		& li {
			display: flex;
			flex-flow: column;
			text-align: center;

			& .phone,
			& .email {
				color: #fff;
				text-decoration: none;
				font-weight: 300;
			}
		}
	}
}

@media (width < 768px) {
	footer {
		& ul {
			flex-flow: column;
			padding: 0;

			& li {
				margin-bottom: 20px;
			}
		}
	}
}
</style>
