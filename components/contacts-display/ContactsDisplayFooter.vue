<template>
	<footer>
		<ul>
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

	& ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		list-style: none;
		color: #fff;

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
</style>
